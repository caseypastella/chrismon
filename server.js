const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require("config");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

// Bodyparser Middleware
app.use(express.json());
app.use(cors());

// DB Config
const db = config.get("mongoURI");

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  }) // Adding new mongo url parser
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

// Use Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json({ extended: true }));

app.post("/send", (req, res) => {
  const output = req.body;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "casey.pastella@cnu.edu",
      pass: ""
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take messages");
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"New Client Contact Request" <casey.pastella@cnu.edu>', // sender address
    to: "chrismoncarelandscaping@yahoo.com", // list of receivers
    subject: "New Client Contact Request", // Subject line
    text: "Hello world?", // plain text body
    html: `<p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Email:  ${output.email} </li>
      <li>First Name: ${output.firstName} </li>
      <li>Last Name: ${output.lastName} </li>
      <li>Phone Number: ${output.phoneNumber} </li>
      <li>Address: ${output.address} </li>
      <li>State: ${output.stateName} </li>
      <li>City: ${output.city} </li>
      <li>Zip Code: ${output.zipCode} </li>
      <li>Description of Services Desired: ${output.description} </li>
    </ul>`
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
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

// Set up route

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
