var User = require('../models/user/user');

var sessionController = {};

sessionController.login = (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    User.findOne({username}, (err, user) => {
        if (err) console.log(err);
        if (!user) {
            res.status(404)
                .send({error: 'Username not found'});
        } else {
            user.comparePassword(password, (err, isMatch) => {
                if (err) console.log(err);
                if (isMatch) {
                    req.session['user'] = user;
                    res.send({id: user._id, username: user.username, name: user.name});
                } else {
                    res.status(404)
                        .send({error: 'Incorrect password'});
                }
            });
        }
    })
};

sessionController.logout = (req, res) => {
    req.session.destroy();
    res.send(200);
};

sessionController.getCurrentUser = (req, res) => {
    res.send(req.session['user']);
}

module.exports = sessionController;