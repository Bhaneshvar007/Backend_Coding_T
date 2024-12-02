let mongoose = require('mongoose');

let otpSchema = mongoose.Schema({
    phoneNumber: String,
    otp: String,
    expiresAt: {
        type: Date,
        index: { expires: '1m' },
    }
})

module.exports = mongoose.model('otpModel', otpSchema);