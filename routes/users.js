var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

router.get('/', (req, res) => {
    userController.findAllUsers(req, res);
});

router.get('/:id', (req, res) => {
    userController.findUserById(req, res);
});

router.post('/', (req, res) => {
    userController.createUser(req, res);
});

router.put('/:id', (req, res) => {
    userController.updateUser(req, res);
});

module.exports = router;