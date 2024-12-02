let express = require('express');
let mongoose = require('mongoose');
// const User = require('./model/user');
// let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');
let cors = require('cors');
const signup = require('./Router/SignUp');
const login = require('./Router/login');

let app = express(); 


app.use(express.json()); //middle ware for converting the data in to a json form

app.use(express.urlencoded({ extended: true }));

app.use(cors()); //  midleware for handling friontend and backedn


mongoose.connect('mongodb://127.0.0.1:27017/authenticationCt')
    .then(() => console.log('MongoDB Connected !'))
    .catch((err) => console.log("errrrr !!!", err))



app.get('/', (req, res) => {
    res.send("Helloo broooo !!!");
})


// Old Way of signUp
// app.post('/create', async (req, res) => {
//     let user = req.body;
//     // console.log(user);


//     // Check user exixts are not
//     let data = await User.findOne({ email: user.email });

//     // If User is Exists
//     if (data) {
//         res.send("User allredy exits !!!")
//     }

//     // If User is no Exists
//     else {
//         let updtPassword = await bcrypt.hash(user.password, 10); // Databse me data ko encrypt karne ke liye eska use kiya jata jisse ki user origanl password na dekh sake



//         // When user is not register if you can can create a user in our DB
//         let dbUser = new User(
//             {
//                 firstName: user.firstName,
//                 lastName: user.lastName,
//                 email: user.email,
//                 role: user.role || 'user',
//                 password: updtPassword,
//             }
//         )
//         dbUser.save();
//         // console.log(updtPassword);

//     }
// });


// New Way of signUp
app.use('/api', signup);




// Old way
// app.post('/login', async (req, res) => {
//     let loginData = req.body;
//     let data = await User.findOne({ email: loginData.email })
//     if (data) {
//         let checkPass = await bcrypt.compare(loginData.password, data.password);
//         if (checkPass) {

//             // Gnerating the token
//             let token = jwt.sign({ email: data.email, role: data.role }, 'asdfghjkcvbnihgv', { expiresIn: '1h' });
//             console.log(token);
//             // res.send('Login Sucessfulllyyyy !!');
//             // res.send('token');
//             res.send({ token })

//             // res.json({
//             //     message: 'Login Successfully !!',
//             //     token: token
//             // });

//         }
//         else {
//             res.send('Invailid passworddd !!')
//         }
//     }
//     else {
//         res.send('Bhai account bna lee yrrr!!')
//     }
// });



// Chek token  kiske liye ganerate huaa hai 


// new way
app.use('/api', login);





function checkRole(role) {
    return (req, res, next) => {
        let token = req.headers.authorization; // recive the token from the frontEnd

        if (!token) {
            return res.send('unauthorizeddd User');
        }
        else {
            let deCodedToken = jwt.verify(token, 'asdfghjkcvbnihgv'); // verifying the token
            if (deCodedToken.role != role) { // check kar rhe hai ki db k role input me jo role hai usse match kar rha h ki nhi 
                return res.send('access denieddd')
            }
            else {
                next();
            }
        }
    }
}

app.get('/admin', checkRole('admin'), (req, res) => {
    res.send('admin acessedddd .....')
})


app.get('/user', checkRole('user'), (req, res) => {
    res.send('user accessedddd .....')
})


app.listen(3000, console.log("Server conneted on port 3000"))