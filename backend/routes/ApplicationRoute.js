const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
let Application = require("../models/ApplicationModel");

//application form router//
router.post("/register", async (req, res) => {
  try {
    const name = req.body.name;
    const pCode = req.body.pCode;
    const accountName = req.body.accountName;
    const securityPin = req.body.securityPin;
    const city = req.body.city;
    const address = req.body.address;
    const sortCode = req.body.sortCode;
    const idealWeight = req.body.idealWeight;
    const medicalHistory = req.body.medicalHistory;

    const application = new Application({
      name,
      pCode,
      accountName,
      securityPin,
      city,
      address,
      sortCode,
      idealWeight,
      medicalHistory,
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
