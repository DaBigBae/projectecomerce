const express = require('express')
const verifyRoute = express.Router()
const t2v = require('../models/token2verify.model')
const User = require('../models/user.model')

verifyRoute.post('/:token', (req,res,next)=>{
    try {
        let user
    t2v.findOne({token: req.params.token}, (err, token)=>{
        if(!token){
            return res.status(400).json({type: 'not-verify', msg: "unable to find your token. Yuor token might be expried!!!"})
        }
        user = User.findOne({email: token.email}, async (err, user)=>{
            if(!user){
                return res.status(400).json({msg: `Unable to find user by your token!!!`})
            }
            if(user.isVerified){
                return res.status(400).json({type:'already-verified', msg: `This user has been already verified`})
            }
            user.isVerified = true
            await user.save()
        })
    })
    res.send()
    } catch (err) {
        res.status(400).json({msg: err.message})
    }
})

module.exports = verifyRoute