let express = require('express');
let app = express();


let methodOveride = require('method-override');


let data = [
    {
        "id": 1,
        username: "john_doe",
        comment: "This is a great post! Really enjoyed reading it."
    },
    {
        "id": 2,
        username: "jane_smith",
        comment: "I agree with the points made here. Very informative."
    },
    {
        "id": 3,
        username: "mike_jones",
        comment: "I have a different perspective on this, but it's still a good read."
    },
    {
        "id": 4,
        username: "alice_williams",
        comment: "This really opened my eyes to a new way of thinking about the issue."
    },
    {
        "id": 5,
        username: "bob_brown",
        comment: "I think there's more to this topic than meets the eye. Worth exploring further."
    }
]

let originalData = data;


// Set view Engine for oue project
app.set('view engine', 'ejs');

// Set the path for public filder
app.use(express.static('public'))

// Set middleware for the form(post)
app.use(express.urlencoded({ extended: true }))


// This midelware for patch 
app.use(methodOveride('_method'))

app.get('/', (req, res) => {
    res.send('hello')
})


// Data Display Route
app.get('/data', (req, res) => {
    res.render('index', { data })
})




// Get and push the data in our array
// Getting the perticuar data on click the a=view button
app.get('/data/new/:id', (req, res) => {
    let { id } = req.params;
    let newData = data.find((e) => e.id == id);
    res.render('new', { newData })
})

// Creating data rute
// This rute for the crarting a new Data
app.get('/data/form', (_, res) => {
    res.render('form')
})


// Creating the own data
//  Getting data and 
app.post('/data', (req, res) => {
    let { username, comment } = req.body;
    data.push({ username, comment, id: data.length });
    res.redirect('/data')
})

// Edit the data
// compare with id ki kis id me hamne click kiya hai 
//  then find the data and send it in to a edit file and set the value in an form
app.get('/data/edit/:id', (req, res) => {
    let { id } = req.params;
    let editData = data.find((e) => e.id == id);
    res.render('edit', { editData })
})



// Get the data from the edit file and show in our {/data} page
// Getting id and compare it in to old data then i will replace thhis data in to a new data
// app.post('/data/edit/:id', (req, res) => {
//     let { username, comment } = req.body;
//     let { id } = req.params;

//     // console.log(username, comment , id);

//     let item = data.find(e => e.id == id);
//     item.username = username
//     item.comment = comment
//     res.redirect('/data')
// })


//  Delete the data in our file
//  Getting the data and compare with id then pop it in to a array
// app.get('/data/delete/:id', (req, res) => {
//     let { id } = req.params;

//     // Using splice method
//     // let index = data.findIndex(e => e.id == id);
//     // data.splice(index, 1);



//     // using filter
//     data = data.filter((e) => e.id != id)

//     res.redirect('/data')
// })




// Recover all data
app.get('/data/recover' , (_ , res)=>{
    data = originalData;
    res.redirect('/data')
})





// This is an for pathc method
//  patch method ka use karne ke liya hai pahle hame ese installl karna padega { _npm i method-override }
//  then require and use as a middle-ware
// Eske liye hame form me tbhi methid patch define karn apadega
// patch method ka iuse karte time hame form ke uril ke aage { ?_method="PATCH" } ka use karna padta hai
app.patch('/data/edit/:id', (req, res) => {
    let { username, comment } = req.body;
    let { id } = req.params;

    // console.log(username, comment , id);

    let item = data.find(e => e.id == id);
    item.username = username
    item.comment = comment
    res.redirect('/data')
})




//  Delete method
app.delete('/data/delete/:id', (req, res) => {
    let { id } = req.params;

     data = data.filter((e) => e.id != id)

    res.redirect('/data')
})


app.listen(3000, console.log("Server run on 3000 port"));