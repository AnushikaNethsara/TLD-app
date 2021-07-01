const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//application form model
let application = new Schema({
  UID: {
    type: String,
    required: true,
  },
  regNo: {
    type: String,
    required: true,
  },
  applicationId: {
    type: String,
    required: true,
  },
  fName: {
    type: String,
    required: true,
  },
  mName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  pCode: {
    type: String,
    required: true,
  },
  ssId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  fax: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  tradeTitle: {
    type: String,
    required: true,
  },
  tradeType: {
    type: String,
    required: true,
  },
  tradeNature: {
    type: String,
    required: true,
  },
  tLine1: {
    type: String,
    required: true,
  },
  tLine2: {
    type: String,
  },
  licenseDetails: {
    type: String,
    required: true,
  },
  tradeDoorNo: {
    type: String,
    required: true,
  },
  revenueWardNo: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  submitedEmail: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Application", application);
