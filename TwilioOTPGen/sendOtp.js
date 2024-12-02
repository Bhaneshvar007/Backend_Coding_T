const twilio = require('twilio');
const env = require('dotenv')

env.config();

const accountSid = process.env.ACCOUNT_SID; // Your Account SID from Twilio Console
const authToken = process.env.AUTH_TOKEN;  

const client = new twilio(accountSid, authToken);

const sendOtp = (phoneNumber, otp) => {
    return client.messages.create({
        body: `Your OTP is ${otp}`,  // The message content
        from: '+17753147514', // Your Twilio Phone Number
        to: phoneNumber                // Recipient's Phone Number
    });
};

module.exports = sendOtp;