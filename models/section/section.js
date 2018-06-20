var mongoose = require('mongoose');

const sectionSchema = mongoose.Schema({
    name: String,
    seats: Number,
    courseId: Number,
    students: [String]
},
{
    timestamps: true
});

var Section = mongoose.model('Section', sectionSchema);
module.exports = Section;