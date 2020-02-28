/*const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const hbs = require('nodemailer-express-handlebars');
const mongoose = require('mongoose');
const path = require('path');
const auth = require('../../middleware/auth');

const smtpTransport = nodemailer.createTransport({
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


  const handlebarsOptions = {
      viewEngine: 'handlebars',
      viewPath: path.resolve('./templates'),
      extName: '.html'
  };

  smtpTransport.use('compile', hbs(handlebarsOptions));
  router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
      .select('-password')
      .then(user => res.json(user));
  });
router.post('/forgotPassword', (req, res, next) => {
    new Promise((resolve, reject) => {
        crypto.randomBytes(20, (err, buf) => {
            if (err) 
            return reject(err);

            const token = buf.toString('hex');
            resolve(token);
        });
    }).then((token) => {
        return new Promise((resolve, reject) => {
            User.findOne({email: req.body.email }, (err, user) => {
                if(!user)
                return reject(400);

                user.resetPasswordToken = token;
                user.resetPasswordExpires = Data.now() + 36000000;

                user.save((err) => { 
                    if(err) 
                    return reject(err)

                    resolve(user);

                });
        });
    })
    .then((user) => {
        return new Promise((resolve, reject) => {
            const smtpTransport = nodemailer.createTransport('SMTP', {
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

              const mailOptions = {
                  to: user.email,
                  from: 'casey.pastella@cnu.edu',
                  subject: 'Password reset',
                  text: `Please Reset Your Password`
              };

              smtpTransport.sendMail(mailOptions, (err) => {
                  if(err) 
                  return reject(err);

                  resolve();
              });

            
            });
        })
        .then(() => res.sendStatus(200))
        .catch((err) => {
            if (err == 404) {
                return res.sendStatus(404);
            }
            return res.status(500).send(err);
        });
    });
});
   
router.post('/resetpassword', (req, res,next) => { 
    new Promise((resolve, reject) => )
})*/
