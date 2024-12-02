const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');


const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/crudDb')
    .then(() => console.log('DB Conectd !!'))
    .catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.render('create');
});



// Creating a data
app.post('/create', (req, res) => {
    let user = req.body;
    // console.log(user);

    let newUser = new User({
        name: user.name,
        email: user.email,
        url: user.url
    })
    newUser.save()
    res.redirect('/read')
})



// Read the documnets
app.get('/read', async (req, res) => {
    let user = await User.find();
    // console.log(user);
    res.render('read', { user });
});


//  Delete
app.get('/delete/:id', async (req, res) => {
    let deletUser = await User.findOneAndDelete({ _id: req.params.id });
    res.redirect('/read')
});


app.get('/edit/:id', async (req, res) => {
    let user = await User.findOne({ _id: req.params.id });
    // console.log(user);
    res.render('edit', { user })
});

app.post('/edit/:id', async (req, res) => {
    let { name, email, url } = req.body;
    let update = await User.findOneAndUpdate({ _id: req.params.id }, { name, email, url }, { new: true });
    res.redirect('/read')
})

app.listen(3000, console.log("Port is listen on port number 3000 !"))