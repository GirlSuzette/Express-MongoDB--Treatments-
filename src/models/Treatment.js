const mongoose = require('mongoose')


const treatmentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    description: { type: String, required: true },
    list_of_treatments: [{ type: String, required: true }],
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    list_of_appointments: [{ type: Schema.Types.ObjectId, ref: 'Appointment' }],
})

module.exports = mongoose.model('Treatment', treatmentSchema);