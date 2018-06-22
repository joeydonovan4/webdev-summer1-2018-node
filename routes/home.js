var express = require('express');
var router = express.Router();
var sessionController = require('../controllers/sessionController');

router.post('/login', (req, res) => {
    sessionController.login(req, res);
});

router.get('/logout', (req, res) => {
    sessionController.logout(req, res);
});

router.get('/profile', (req, res) => {
    sessionController.getCurrentUser(req, res);
});

module.exports = router;