const { default: mongoose } = require("mongoose");

let userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

let User = mongoose.model('user', userSchema);

module.exports = User
