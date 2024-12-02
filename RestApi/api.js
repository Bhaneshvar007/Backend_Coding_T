let express = require('express');
let app = express();

const axios = require('axios');

app.set('view engine', 'ejs');
app.use(express.static('public'))



let recipes = null;
axios.get('https://dummyjson.com/recipes')
    .then(response => {
        recipes = response.data.recipes;
        console.log('Recipes fetched successfully.');

    })
    .catch(error => {
        console.error(error); // Handle error
    });


app.get('/', (req, res) => {
    res.send('Go on recipes route');
});

app.get('/recipe', (req, res) => {
    res.render('api', { recipes })
})



app.get('/recipes/cart/:id', (req, res) => {
    let { id } = req.params;
    let newData = recipes.find((e) => e.id == id)
    res.render('newApi', { newData })
})





app.listen(3000, console.log("Server run on 3000 port"));