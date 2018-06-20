var User = require('../models/user/user');

var userController = {};

userController.findAllUsers = (req, res) => {
    User.find({})
        .then(users => {
            res.send(users);
        }).catch(logError);
};

userController.findUserById = (req, res) => {
    var id = req.params['id'];
    User.findById(id)
        .then(user => {
            res.json(user);
        }).catch(logError);
};

userController.createUser = (req, res) => {
    var user = req.body;
    User.create(user)
        .then(user => {
            req.session['currentUser'] = user;
            res.send(user);
        }).catch(logError);
};

userController.updateUser = (req, res) => {
    var id = req.params['id'];
    var updatedUser = req.body;
    User.findByIdAndUpdate(id, updatedUser)
        .then(user => {
            res.json(user);
        }).catch(logError);
};

function logError(err) {
    console.log(err);
}

module.exports = userController;