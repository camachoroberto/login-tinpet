// models/user.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50
    },
    email: {
      type: String,
      unique: true,
      required: true,
      minlength: 2,
      maxlength: 50
    },
    password: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 200
    },
    phone: {
      type: String,
      trim: true,
      required: true,
      minlength: 2,
      maxlength: 50
    },
    birthDate: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
