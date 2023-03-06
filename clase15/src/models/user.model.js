const mongoose = require('mongoose')


const userCollection = 'students'
const userSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model(userCollection, userSchema)