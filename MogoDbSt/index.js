let express = require('express');
let app = express();

let mongoose = require('mongoose');

let userSchema = require('./db')



app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());



// mongoose.connect('mongodb://127.0.0.1:27017/dummyDatabase')
//     .then(() => console.log('MongoDB Connected !'))
//     .catch((err) => console.log("errrrr !!!", err))




// // Creating a schema for user
// let userSchema = mongoose.Schema({
//     username: {
//         type: String,
//     },
//     email: {
//         type: String,
//     },
//     location: {
//         type: String,
//     },
// });


// let User = mongoose.model('user', userSchema);
// let dummyData = new User(
//     { username: "Bhaneshvar", email: "bhanu21@gmail.com", location: "Jabalpur" })

// dummyData.save();

app.get("/", (req, res) => {
    res.send("mongodbbbb");
})

app.get("/create", (req, res) => {
    let user = new userSchema(
        {
            name: "abhay",
            email: 'abhay@gmail.com',
            age: 20,
        }

    )
    user.save();
    res.send(user);
})

app.get("/read", async (req, res) => {
    let user = await userSchema.find();
    res.send(user);
})

app.get("/update", async (req, res) => {
    // syntex
    // let udtUser = userSchema.findOneUpdate(findeone, update, { new: true })
    let udtUser = await userSchema.findOneAndUpdate({ name: "abhay" }, { name: "sdfghj" }, { new: true });
    console.log(udtUser);

    res.send(udtUser);
})

app.get("/delete", async (req, res) => {
    let deleteUser = await userSchema.findOneAndDelete({ name: 'abhay' });
    res.send(deleteUser);
})


app.listen(4000, console.log("connect on 4000 port !!"))