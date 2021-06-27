const mongoose = require('mongoose');
const Schema= mongoose.Schema;

//application form model
let application = new Schema({
    UID :{
        type :String,
        required: true
    },
    regNo :{
        type :String,
        required: true
    },
    applicationId :{
        type :String,
        required: true
    },
    fName :{
        type :String,
        required: true
    },
    mName :{
        type :String,
        required: true
    },
    lName :{
        type :String,
        required: true
    },
    pCode :{
        type :String,
        required: true
    },
    ssId :{
        type :String,
        required: true
    },
    email :{
        type :String,
        required: true
    },
    phone :{
        type :Number,
        required: true
    },
    fax :{
        type :Number,
        required: true
    },
    city :{
        type :String,
        required: true
    },
    country :{
        type :String,
        required: true
    },
    spouseFName :{
        type :String,
        required: true
    },
    spouseMName :{
        type :String,
        required: true
    },
    spouseLName :{
        type :String,
        required: true
    },
    relationship :{
        type :String,
        required: true
    },
    doorNo :{
        type :Number,
        required: true
    },
    line1 :{
        type :String,
        required: true
    },
    line2 :{
        type :String
    },
    tradeTitle :{
        type :String,
        required: true
    },
    tradeType :{
        type :String,
        required: true
    },
    tradeNature :{
        type :String,
        required: true
    },
    tLine1 :{
        type :String,
        required: true
    },
    tLine2 :{
        type :String
    },
    licenseDetails :{
        type :String,
        required: true
    },
    wardNo :{
        type :String,
        required: true
    },
    zoneNo :{
        type :String,
        required: false
    },
    permissionNo :{
        type :Number,
        required: true
    },
    assessmentNo :{
        type :Number,
        required: true
    },
    tCity :{
        type :String,
        required: true
    },
    tCountry:{
        type: String,
        required: true
    },
    tradeDoorNo :{
        type: String,
        required: true
    },
    revenueWardNo :{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    },
    submitedEmail:{
        type: String,
        required: true
    },
    
});

module.exports = mongoose.model('Application',application);
