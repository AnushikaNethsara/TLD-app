const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
let Application = require("../models/ApplicationModel");

//application form router//
router.post("/register", async (req, res) => {
  try {
    const UID = req.body.UID;
    const regNo = req.body.regNo;
    const applicationId = req.body.applicationId;
    const fName = req.body.fName;
    const mName = req.body.mName;
    const lName = req.body.lName;
    const pCode = req.body.pCode;
    const ssId = req.body.ssId;
    const email = req.body.email;
    const phone = Number(req.body.phone);
    const fax = Number(req.body.fax);
    const city = req.body.city;
    const country = req.body.country;

    const tradeTitle = req.body.tradeTitle;
    const tradeType = req.body.tradeType;
    const tradeNature = req.body.tradeNature;
    const tLine1 = req.body.tLine1;
    const tLine2 = req.body.tLine2;
    const licenseDetails = req.body.licenseDetails;

    const tradeDoorNo = req.body.tradeDoorNo;
    const revenueWardNo = req.body.revenueWardNo;
    const status = req.body.status;
    const submitedEmail = req.body.submitedEmail;

    const application = new Application({
      UID,
      regNo,
      applicationId,
      fName,
      mName,
      lName,
      pCode,
      ssId,
      email,
      phone,
      fax,
      city,
      country,
      tradeTitle,
      tradeType,
      tradeNature,
      tLine1,
      tLine2,
      licenseDetails,
      tradeDoorNo,
      revenueWardNo,
      status,
      submitedEmail,
    });

    application
      .save()
      .then((sup) => {
        res.status(200).json({ application: "successful" });
      })
      .catch((err) => {
        res.status(400).json({ err });
      });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.route("/getAllDetails").get(function (req, res) {
  Application.find()
    .exec()
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//get application forms by email
router.get("/:email", async (req, res) => {
  try {
    await Application.find({ submitedEmail: req.params.email })
      .exec()
      .then((application) => {
        res.json(application);
      })
      .catch((err) => res.status(400).json("Error : " + err));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//update application status
router.put("/:id", async (req, res) => {
  try {
    await Application.findById(req.params.id).then((application) => {
      application.status = req.body.status;
      application
        .save()
        .then(() =>
          res.status(200).json({ msg: "You've Updated the application!" })
        )
        .catch((err) => res.status(400).json({ error: err.message }));
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
