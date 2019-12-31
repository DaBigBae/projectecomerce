const express = require('express')
const Category = require('../models/category.model')
const categoryRoute = express.Router()

categoryRoute.get('/', async (req, res)=>{
    try {
        const categoryList = await Category.find()
        res.status(200).json(categoryList)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

categoryRoute.get('/:id',  async(req, res)=>{
    res.status(200).json(res.product)
})

categoryRoute.post('/', async (req,res)=>{
    try {
        const newCate = new Category({
            name: req.body.name
        })
        const result = await newCate.save()
        res.send(result)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

module.exports = categoryRoute