const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let Application = require('../models/ApplicationModel');

router.post("/register", async (req, res) => {
    try {
        let application = new Application (req.body);
        application.save()
            .then(sup=>{
                res.status(200).json({'application':'successful'});
            }).catch(err=>{
            res.status(400).send('fail');
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.route('/getAllDetails').get(function (req,res) {

    Application.find().exec().then(item => {

        res.status(200).json(item)
    }).catch(err => {
        res.status(500).json(err);
    });
});
module.exports = router;;