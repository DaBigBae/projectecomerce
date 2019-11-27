const express = require('express')
const verifyRoute = express.Router()
const t2v = require('../models/token2verify.model')


module.exports = verifyRoute