let express = require('express');
let app = express();

let mongoose = require('mongoose');
const User = require('./user');
const bcrypt = require('bcrypt')

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
mongoose.connect('mongodb://127.0.0.1:27017/authenticationCt')
    .then(() => console.log('Db Connected !!'))
    .catch((err) => console.log("error !!", err))

app.get('/', (req, res) => {
    res.send('hello login !!')
})

app.get('/register', (req, res) => {
    res.render('register');
});


app.post('/register', async (req, res) => {
    let user = req.body;

    let validate = await User.findOne({ email: user.email });

    if (validate) {
        res.send("user alredy exists , Please login the account !")
    }
    else {
        let decPass = await bcrypt.hash(user.password, 10);

        let newUser = new User({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: decPass,
        })
        await newUser.save();
        // res.render('home')
        res.render('home', { firstName: validate.firstName , lastName: validate.lastName })
    }

})


app.get('/login', (req, res) => {
    res.render('login')
});



app.post('/login', async (req, res) => {
    let user = req.body;

    let validate = await User.findOne({ email: user.email });

    if (validate) {
        let checkPass = await bcrypt.compare(user.password, validate.password);

        if (checkPass) {
            //   res.send('User login successfully !!')
            // res.render('home')
            res.render('home', { firstName: validate.firstName , lastName: validate.lastName })

        }
        else {
            res.send('Incorect password !!')
        }
    }
    else {
        res.send('please register first !!')
    }

})



app.listen(3000, console.log("Server is running 3000"));