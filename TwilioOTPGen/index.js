const express = require('express');
const sendOtp = require('./sendOtp');
const optModel = require('./optModel');
let mongoose = require('mongoose');

const app = express();
app.use(express.json());



mongoose.connect('mongodb://127.0.0.1:27017/otpSchemaDB')
    .then(console.log('Db Connected'))
    .catch((err) => console.log('err !!', err))



app.post('/send-otp', async (req, res) => {
    const { phoneNumber } = req.body;


    const otp = Math.floor(100000 + Math.random() * 900000);
    const expiresAt = new Date(Date.now() + 1 * 60 * 1000);

    try {
        await sendOtp(phoneNumber, otp);
        // res.status(200).send({ message: 'OTP sent successfully', otp });

        const newOtp = new optModel({
            phoneNumber,
            otp,
            expiresAt,
        });
        await newOtp.save();
        res.status(200).send({ message: `OTP sent successfully { ${otp} }` });




    } catch (error) {
        res.status(500).send({ error: 'Failed to send OTP' });
    }
});




// veryfy otp
app.post('/verify', async (req, res) => {
    let { phoneNumber, otp } = req.body;
    // console.log(otp);


    // Validate request body
    if (!phoneNumber || !otp) {
        res.status(400).send({ error: 'Phone number and OTP are required' });
    }



    try {
        let recordOtp = await optModel.find({ phoneNumber });
        // console.log(recordOtp);


        if (recordOtp[0].otp == otp) {
            res.send({ message: 'OTP verified successfully' });
            await optModel.deleteOne({ otp: recordOtp[0].otp });
        }

        else {
            res.status(400).send({ error: 'Invalid OTP' });
        }

    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to verify OTP' });
    }
})









app.listen(1000, () => {
    console.log('Server is running on port 1000');
});