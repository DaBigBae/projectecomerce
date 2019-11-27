const express = require('express')
const orderRoute = express.Router()
const Order = require('../models/order.model')

orderRoute.get('/', async (req,res)=>{
    try{
        const orders = await Order.find()
        res.json(orders)
    } catch (err){
        res.status(500).json({message: err.message});
    }
})

orderRoute.get('/:id', getOrders, async(req,res)=>{
     res.json(res.order);
})

orderRoute.post('/add', async (req,res)=>{
    try{
        const order = new Order({
            productname: req.body.name,
            quantity: req.body.quantity
        })
        await order.save()
    } catch (err){
        res.status(400).json({message: err.message});
    }
})

orderRoute.patch('/:id', getOrders, async (req, res)=>{
    if(req.body.name !=null){
        res.product.productname = req.body.name
    }
    if(req.body.quantity !=null){
        res.product.quantity = req.body.quantity
    }
    try {
        const updateOrder = await res.order.save()
        res.json(updateOrder)
    } catch (err) {
        res.status(400).json({message: err.message});
    }
})

orderRoute.delete('/:id', getOrders, async (req,res)=>{
    try {
        await res.order.remove()
         res.json({message: `Delete this order!!!`});
    } catch (error) {
        res.status(500).json({message: err.message});
    }
})

async function getOrders(req,res,next){
    let order
    try{
        order = await Order.findById(req.params.id)
        if(order == null){
            return res.status(404).json({message: `Don't have order!!!`})
        }
    } catch (err){
        return res.status(500).json({message: err.message});
    }
}

module.exports = orderRoute