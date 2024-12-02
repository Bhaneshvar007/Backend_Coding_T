const express = require('express');
const router = express.Router();
const User = require("../model/user");
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
    let loginData = req.body;
    let data = await User.findOne({ email: loginData.email })
    if (data) {
        let checkPass = await bcrypt.compare(loginData.password, data.password);
        if (checkPass) {

            // Gnerating the token
            let token = jwt.sign({ email: data.email, role: data.role }, 'asdfghjkcvbnihgv', { expiresIn: '1h' });
            console.log(token);
            // res.send('Login Sucessfulllyyyy !!');
            // res.send('token');
            res.send({ token })

            // res.json({
            //     message: 'Login Successfully !!',
            //     token: token
            // });

        }
        else {
            res.send('Invailid passworddd !!')
        }
    }
    else {
        res.send('Bhai account bna lee yrrr!!')
    }
});



module.exports = router