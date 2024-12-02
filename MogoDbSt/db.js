let mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/exampleDatabse')
    .then(() => {
        console.log('mongooDB Conectedd !!!!!');

    }).catch((err) => {
        console.log('error', err);
    })


let userSchema = mongoose.Schema({
    name: String,
    email: String,
    age: Number,
})

module.exports = mongoose.model('User', userSchema);