var mongoose = require('mongoose');

const enrollmentSchema = mongoose.Schema({
    section: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Section'
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},
{
    timestamps: true
});

var Enrollment = mongoose.model('Enrollment', enrollmentSchema);
module.exports = Enrollment;