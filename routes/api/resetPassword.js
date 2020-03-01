const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const hbs = require("nodemailer-express-handlebars");
const mongoose = require("mongoose");
const path = require("path");
const auth = require("../../middleware/auth");
const crypto = require("crypto");
const moment = require("moment");
moment().format();

router.post("/forgotpassword", (res, req) => {
  const { email } = req.body;

  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    const newUser = new User({
      userId: user.id,
      passwordResetToken: crypto.randomBytes(16).toString("hex")
    });

    user.reset_password_token = newUser.passwordResetToken;
    user.reset_password_expires = moment().add(12, "hours");

    user.save(err => {
      if (err) {
        return res.status(400).send({ message: err.message });
      }

      let transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "casey.pastella@cnu.edu",
          pass: "Assasin@123"
        },
        tls: {
          rejectUnauthorized: false
        }
      });

      let mailOptions = {
        from: '"password Reset Link" <casey.pastella@cnu.edu>', // sender address
        to: user.email, // list of receivers
        subject: "Reset Password Link", // Subject line
        text: "Hello world?", // plain text body
        html: `<p>You have requested to reset your password. \n\n Please use this link
                    <a href="https://localhost:3000/forgotpassword/${newUser.reset_password_token}">https://localhost:3000/forgotpassword/${newUser.reset_password_token}</a> 
                    \n\n If not please ignore this email. \n</p>`
      };
      transport.sendMail(mailOptions, (err, info) => {
        if (err) {
          return console.log(err);
        } else {
          console.log("Message sent: %s", info.messageId);
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
          res.json({
            status: "success"
          });
        }
        res.render("contact", { msg: "Email has been sent" });
      });
    });
  });
});

router.post("/resetpassword/:token", (req, res) => {
  User.findOne({
    reset_password_token: req.params.reset_password_token,
    user
  }).then(err, reset_password_token => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    if (!reset_password_token) {
      return res.status(400).send({
        message: "this token is not valid."
      });
    }
    User.findById({ userId }).then(user, err => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }

      if (user.reset_password_token !== newUser.passwordResetToken) {
        return res.status(400).send({
          message: "User token didnt match"
        });
      }

      if (moment().utcOffset(0) > user.reset_password_expires) {
        return res.status(400).send({
          message: "token has expired."
        });
      }

      user.password = req.body.password;
      user.reset_password_token = "none";
      user.reset_password_expires = moment().utcOffset(0);

      bcrypt.genSalt(
        10(err, salt => {
          bcrypt.hash(user.password, salt, (err, hash) => {
            user.password = hash;
            user.save().then(() => {
              let transport = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                  user: "casey.pastella@cnu.edu",
                  pass: "Assasin@123"
                },
                tls: {
                  rejectUnauthorized: false
                }
              });

              let mailOptions = {
                from: '"password Reset confirmation" <casey.pastella@cnu.edu>', // sender address
                to: user.email, // list of receivers
                subject: "Reset Password confirmation", // Subject line
                text: "Hello world?", // plain text body
                html: `<p>This is a confirmation that the password for your account ${user.email} has just been changed.</p>`
              };
              transport.sendMail(mailOptions, (err, info) => {
                if (err) {
                  return console.log(err);
                } else {
                  console.log("Message sent: %s", info.messageId);
                  console.log(
                    "Preview URL: %s",
                    nodemailer.getTestMessageUrl(info)
                  );
                  res.json({
                    status: "success"
                  });
                }
                res.render("contact", { msg: "Email has been sent" });
              });
            });
          });
        })
      );
    });
  });
});
module.exports = router;
