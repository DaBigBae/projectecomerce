const express = require('express')
const productRoute = express.Router()
const Product = require('../models/product.model')
const Category = require('')

productRoute.get('/', async (req,res)=>{
    try {
        const productList = await Product.find()
        res.json(productList);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})

productRoute.get('/:id', getProduct, async(req, res)=>{
     res.json(res.product);
})

productRoute.get('/category/:id', )

productRoute.post('/add', async (req, res)=>{
    try {
        const product = new Product({
            name: req.body.name,
            price: req.body.price,
            description: req.body.desc,
            // rating: req.body.rating,
            qty: req.body.qty,
            imgurl: req.body.imgurl,
            category: req.body.category
        })
        const result = await product.save()
        res.send(result);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
})

productRoute.patch('/:id', getProduct, async (req, res)=>{
    if(req.body.desc !=null){
        res.product.description = req.body.desc
    }
    if(req.body.price !=null){
        res.product.price = req.body.price
    }
    try {
        const updateProduct = await res.product.save()
        res.json(updateProduct)
    } catch (err) {
        res.status(400).json({message: err.message});
    }
})

productRoute.delete('/:id', getProduct, async (req, res)=>{
    try {
        await res.product.remove()
         res.json({message: `Delete this product!!!`})
    } catch (err){
        res.status(500).json({message: err.message});
    }
})

async function getProduct(req, res, next){
    let product 
    try {
        product = await Product.findById(req.params.id)
        if (product == null){
            return res.status(404).json({message: `Can't find product!`});
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
    res.product = product
    next()
}

module.exports = productRoute