const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let Application = require('../models/ApplicationModel');

router.post("/register", async (req, res) => {
    try {
        const UID= req.body.UID;  
        const regNo= req.body.regNo;
        const applicationId= req.body.applicationId;
        const fName= req.body.fName;
        const mName= req.body.mName;
        const lName= req.body.lName;
        const pCode= req.body.pCode;
        const ssId= req.body.ssId;
        const email= req.body.email; 
        const phone= Number(req.body.phone) ;
        const fax= Number(req.body.fax) ;
        const city= req.body.city;
        const district= req.body.district;
        const spouseFName= req.body.spouseFName;
        const spouseMName= req.body.spouseMName;
        const spouseLName= req.body.spouseLName;
        const relationship= req.body.relationship;
        const doorNo= Number(req.body.doorNo) ;
        const line1= req.body.line1;
        const line2= req.body.line2;
        const tradeTitle= req.body.tradeTitle;
        const tradeType= req.body.tradeType;
        const tradeNature= req.body.tradeNature;
        const tLine1= req.body.tLine1;
        const tLine2= req.body.tLine2;
        const licenseDetails=req.body.licenseDetails;
        const wardNo= req.body.wardNo;
        const zoneNo= req.body.zoneNo ;
        const permissionNo= Number(req.body.permissionNo) ;
        const assessmentNo= Number(req.body.assessmentNo) ;
        const tCity= req.body.tCity;
        const tDistrict = req.body.tDistrict; 
        const tradeDoorNo= req.body.tradeDoorNo;
        const revenueWardNo= req.body.revenueWardNo;

        const application = new Application ({
            UID ,
            regNo ,
            applicationId ,
            fName ,
            mName ,
            lName ,
            pCode ,
            ssId ,
            email ,
            phone ,
            fax ,
            city ,
            district ,
            spouseFName ,
            spouseMName ,
            spouseLName ,
            relationship ,
            doorNo ,
            line1 ,
            line2 ,
            tradeTitle ,
            tradeType ,
            tradeNature ,
            tLine1 ,
            tLine2 ,
            licenseDetails ,
            wardNo ,
            zoneNo ,
            permissionNo ,
            assessmentNo ,
            tCity ,
            tDistrict ,
            tradeDoorNo ,
            revenueWardNo 
        });

        application.save()
            .then(sup=>{
                res.status(200).json({'application':'successful'});
            }).catch(err=>{
            res.status(400).json({err});
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