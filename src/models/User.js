const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    email: { type: String, unique: true }
})

module.exports = mongoose.model('User', userSchema);