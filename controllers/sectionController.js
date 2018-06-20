var Section = require('../models/section/section');

var sectionController = {};

sectionController.findAllSections = (req, res) => {
    Section.find({})
        .then(sections => {
            res.send(sections);
        }).catch(logError);
};

sectionController.findSectionById = (req, res) => {
    var id = req.params['id'];
    Section.findById(id)
        .then(section => {
            res.json(section);
        }).catch(logError);
};

sectionController.createSection = (req, res) => {
    var section = req.body;
    Section.create(section)
        .then(section => {
            res.send(section);
        }).catch(logError);
};

sectionController.updateSection = (req, res) => {
    var id = req.params['id'];
    var updatedSection = req.body;
    Section.findByIdAndUpdate(id, updatedSection)
        .then(section => {
            res.json(section);
        }).catch(logError);
};

function logError(err) {
    console.log(err);
}

module.exports = sectionController;