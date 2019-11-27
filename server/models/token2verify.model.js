const mongoose = require('mongoose')

const tokenSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    token:{
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
        expires: 10800 //3h
    }
})

const token2verify = mongoose.model('token2verify', tokenSchema)
module.exports = token2verify