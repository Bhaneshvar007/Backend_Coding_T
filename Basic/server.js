// console.log("Hello World!!!!");
// console.log("Abhishek");



// Synchroun File System
//  let fs = require('fs');
// fs.writeFileSync('index.html' , 'this is an index'); // Creating a file in our system

// let data = fs.readFileSync('index.html'); // Read the data in our file
// // console.log(data.toString());

// // fs.unlinkSync('index.html') // delete file in our system
// fs.appendFileSync('index.html' , "Append a new Data in existing file"); // using for existing data file updation;

// console.log(fs.readFileSync('index.html').toString());



// Asynce File System
// let fs = require('fs');
// fs.writeFile('index.html', 'hellow', (err) => { // create a file
//     if (err) throw err
//     console.log('Nothing to change kyyyyyyyyy');
// });


// // Read the data in our file
// fs.readFile('index.html', (err, data) => {
//     if (err) throw err
//     console.log(data.toString());
// });



// // Delete a file
// fs.unlink('index.html' , (err , data)=>{
//     if(err) throw err
//     console.log('File Delete successfullyy');
// })


// fs.appendFile('index.html', 'hello new Data', (err) => {
//     if (err) throw err;
//     console.log("File updated successfully");
// });





// Library and framwork
// The main difference between a library and a framework is that a library provides tools for developers to use as they wish, while a framework provides a structure that guides how developers build their applications


// how can we use outer depandencies
// npm i give-me-a-joke {Install first} and requre and use

// let joke = require('give-me-a-joke');
// joke.getRandomDadJoke((data)=>{
//     console.log(data);

// })






//  HOW TO CREATE A SERVER USING NODE-JS using HTTP Module

// let http = require('http');

// const server = http.createServer((req, res) => {
//     res.end("Server Created SuccessFully");
// });
// server.listen(8000, console.log('Server running on port 8000'));







// // getting the response from the server
// let http = require('http');

// const server = http.createServer((req, res) => {
//     console.log(req , "Reqqqqqqqq");

//     if(req.url == '/')
//     res.end("Server Created SuccessFully");


//     else if(req.url == '/about')
//     res.end("About Paggeeeeee");


//     else 
//     res.end('404 Page  Not found')
// });
// server.listen(8000, console.log('Server running on port 8000'));








// Crating a server using expressJS

let express = require('express');
let app = express();



// midleware -> it is nothing but a bodygard b/w the frontend and backend
// midleware -1
// app.use((req, res, next) => {
//     // res.send("Don't Go From here !!!");
//     next();
// })

// // midleware -2
// app.use((req, res, next) => {
//     // res.send("Don't Go From here !!!");
//     next();
// })


// Static routining
// app.get('/', (req, res) => {
//     res.send("hello express")
// });

// // Static routining
// app.get('/login', (req, res) => {
//     res.send("hello login")
// });



// Dynamic Routing  : Multiple route create na krke ek hi single route me work karna jiske thrugh multiple route ko ascess kiya ja sake
// Dynamic routing is a method for selecting the best path for data to travel through a network to reach its destination. 
// app.use('/:id', (req, res) => { // id-> id is nothing but a parameter (Like Input)
//     console.log(req.params);
//     res.send("This is an Dynamic Routing")

// })


// Task -1  Array me kitne element jhai unko route ke thrugh print karna hai

// let arr = [1, 2, 3, 45, 5, 6, 7, 4, 32, 2, 4, 36, 56, 45, 22, 5, 36, 47, 2, 2, 54, 65, 6, 2, 2, 65, 7, 45];


// app.get('/:id', (req, res) => {
//     let { id } = req.params;
//     let count = 0;




//Print the count of the data
// for (let num of arr) {
//     if (num == id) {
//         count++;
//     }
// }

// let fil = arr.filter((e) => {
//     return e == id;
// });

// res.send(fil)

// res.send({count});



// Print the name is equal to the count
// 1. first way
// let ans = [];
// for (let num of arr) {
//     if (num == id) {
//         ans.push("Bhaneshvar");
//     }
// }


//     let fil = arr.filter((e) => {
//         return e == id;
//     });

//     let name = fil.map(() => {
//         return "Bhaneshvar"
//     })

//     // res.send(name);
//     res.send(name.toString());

//     // res.send(ans);

// })



// get - >  server se data manwana ho
// post -> server par data send karna ho
// patch/put ->  update the data 
// delete - > delete the data from the server





// app.get('/' , (req,res)=>{
//     res.send("Hello js");
// })







//  Path Parameter

// Path parameters are an essential part of RESTful APIs
// '/path/example'
// app.get('/path/example' , (rew,res)=>{
// res.send("msg")
// })


// Quaryparameter - > A query string refers to the portion of a URL (Uniform Resource Locator) that comes after the question mark (?). It
// example -> ?name=abc like that

// app.get('/search', (req, res) => {
//     console.log(req.query);
//     // ?name=abhishek&&age=20 this is an quary

//     let { name, age } = req.query;
//     res.send(`hello " ${name} " and ${age}`)
// })



//  Post Method

// Using for sending the data from the frontEnd to BackEnd

// app.use(express.urlencoded({ extended: true })); // Middleware for parsing URL-encoded data (For Form data)
// app.use(express.json()); // Middleware for parsing JSON data

// app.post('/search', (req, res) => {
//     // Using Thunder Client or Postman to send the data
//     console.log(req.body);

//     const { name } = req.body; // Destructure 'name' from request body
//     console.log(name); // Middleware is required to parse JSON data from req.body

//     res.send("Data sent successfully");
// });





// Template Engine (Templating {Ejs})

// Install the Ejs
// Alwaye create a views Folder


app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//     res.render('index')
// })



// Random number Ganeratore
// app.get('/', (req, res) => {
//     let randomeNum = Math.random();
//     res.render('index', { randomeNum })
// });


// 

// let arr = ['cat', 'dog', 'cow', 'ox']
// app.get('/', (req, res)=>{
//     res.render('index', { arr })
// })
// app.get('/new', (req, res)=>{
//     res.render('new')
// })



// app.get('/', (req, res) => {
//     // res.send("Homeeeee Pageeeee haiiiii")
//     res.render('route')
// })

// app.get('/about', (req, res) => {
//     res.send("Aboutteeee Pageeeee haiiiii")
// })

// app.get('/contect', (req, res) => {
//     res.send("Contecttttt Pageeeee haiiiii")
// })

// app.get('/help', (req, res) => {
//     res.send("Helpppppp Pageeeee haiiiii")
// })




//  QuaryParamete
// let data = {
//     name: '',
//     age: "",
// }
// app.get('/search', (req, res) => {
//     let { name, age } = req.query;
//     data.name = name;
//     data.age = age;
//     res.render('Display', {data})
// })



// Get and POSt
app.get('/', (_, res) => {
    res.render('getAndPost')
})


app.use(express.urlencoded({ extended: true })); // Middleware for parsing URL-encoded data (For Form data)
app.use(express.json()); // Middleware for parsing JSON data

app.get('/user', (req, res) => {
    // res.send("getttttt senddddddd")
    res.send(req.query);
})


app.post('/user', (req, res) => {
    // res.send("posttttt senddddddd")

    res.send(req.body);
})



// Applying styling in backend
app.use(express.static('public'))

app.post('/user', (req, res) => {

    res.send("posttttt senddddddd")

    // res.send(req.body);
})


app.listen(3000, console.log("Server Started on port http://localhost:3000"));