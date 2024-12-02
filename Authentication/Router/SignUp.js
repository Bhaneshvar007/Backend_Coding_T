const express = require('express');
const router = express.Router();
const User = require("../model/user");
let bcrypt = require('bcrypt');



router.post('/create', async (req, res) => {
    let user = req.body;
    // console.log(user);


    // Check user exixts are not
    let data = await User.findOne({ email: user.email });

    // If User is Exists
    if (data) {
        res.send("User allredy exits !!!")
    }

    // If User is no Exists
    else {
        let updtPassword = await bcrypt.hash(user.password, 10); // Databse me data ko encrypt karne ke liye eska use kiya jata jisse ki user origanl password na dekh sake



        // When user is not register if you can can create a user in our DB
        let dbUser = new User(
            {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role || 'user',
                password: updtPassword,
            }
        )
        dbUser.save();
        // console.log(updtPassword);
        res.send('user registered sucessfully !!')

    }
});


module.exports = router