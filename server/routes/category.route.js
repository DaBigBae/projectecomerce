const express = require('express')
const Category = require('../models/category.model')
const categoryRoute = express.Router()

// categoryRoute.get('/', async (req, res)=>{

// })

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