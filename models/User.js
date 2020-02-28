const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  register_date: {
    type: Date,
    default: Date.now
  },
  reset_password_token: {
    type: String
  },
  reset_password_expires: {
    type: Date
  }
});

UserSchema.methods.comparePassword = password => {
  return bcrypt.compareSync(password, this.password);
};

module.exports = User = mongoose.model("user", UserSchema);
