const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    productname: {
        type: String,
        unique: true,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})

const Order = mongoose.model('Order', orderSchema)
module.exports = Order