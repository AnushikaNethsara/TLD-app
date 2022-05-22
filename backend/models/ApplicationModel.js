const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//application form model
let application = new Schema({
  name: {
    type: String,
    required: true,
  },
  pCode: {
    type: String,
    required: true,
  },
  accountName: {
    type: String,
    required: true,
  },
  securityPin: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  sortCode: {
    type: String,
    required: true,
  },
  idealWeight: {
    type: Number,
    required: true,
  },
  medicalHistory: {
    type: String,
    required: true,
  },
  submitedEmail:{
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Application", application);
