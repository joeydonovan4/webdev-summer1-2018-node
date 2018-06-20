var express = require('express');
var router = express.Router();
var sectionController = require('../controllers/sectionController');

router.get('/', (req, res) => {
    sectionController.findAllSections(req, res);
});

router.get('/:id', (req, res) => {
    sectionController.findSectionById(req, res);
});

router.post('/', (req, res) => {
    sectionController.createSection(req, res);
});

router.put('/:id', (req, res) => {
    sectionController.updateSection(req, res);
});

module.exports = router;