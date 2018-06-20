var mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {
        firstName: String,
        lastName: String,
    },
    email: {type: String, required: true},
    sections: [String]
},
{
    timestamps: true
});

var User = mongoose.model('User', userSchema);
module.exports = User;