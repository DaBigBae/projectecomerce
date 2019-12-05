const express = require('express')
const userRoute = express.Router()
const crypto = require('crypto')
const nodeMailer = require('nodemailer')
const auth = require('../middleware/auth')
const User = require('../models/user.model')
const token2verify = require('../models/token2verify.model')

//get all user
userRoute.get('/', async (req,res)=>{
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

//get one user
// userRoute.get('/:id', getUser, (req, res)=>{
//     res.json(res.user)
// })

//creat/signup user
userRoute.post('/signup', async (req, res)=>{
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        // if(user){
        //     return res.status(400).send({msg: 'Email da duoc su dung boi tai khoan khac'})
        // }

        
        //const token = await user.generateAuthToken()
        //res.status(201).json({user, token})
        await user.save((err)=>{
            if(err){
                res.status(400).json({msg: err.message})
            }
            const tokenv = new token2verify({email: user.email, token: crypto.randomBytes(16).toString('hex')})
            tokenv.save(err=>{
                if(err){
                    req.status(500).send({msg: err.message})
                }
                // const transporter = nodeMailer.createTransport({service: 'gmail', auth: {user: process.env.VERIFY_EMAIL, pass: process.env.VERIFY_PASS}})
                // const mailOptions = { from: 'robot', to: user.email, subject: 'Account Verification', html: 'click: \nhttp:\/\/' + '137.135.125.91:3000' + '\/verify\/' + tokenv.token + '\n'}
                // transporter.sendMail(mailOptions, (err)=>{
                //     if(err){
                //         return res.send({msg: err.message})
                //     }
                //     res.status(200).json({msg: `A Verification email has been send to ` + user.email + `.`})
                // })
                console.log(tokenv.token)
            })
        })
        res.send()
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

//login user
userRoute.post('/login', async (req, res)=>{
    try {
        const {email, password} = req.body
        const user = await User.findByCredentials(email,password)
        if(!user){
            return res.status(401).json({err: 'Login failed! Check authentication credentials'})
        }
        if(!user.isVerified){
            return res.status(401).send({type: 'not-verified', message: 'You account not have been verified!!!'})
        }
        const token = await user.generateAuthToken()
        res.json({user, token})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

//user profile
userRoute.get('/profile', auth, async (req, res)=>{
    res.send(req.user)
})

//logout
userRoute.post('/logout', auth, async function(req, res){
    try {
        req.user.tokens = req.user.tokens.filter((token)=>{
            return token.token != req.token
        })
        await req.user.save()
        req.send()
    } catch (err) {
        res.status(500).send(err)
    }
})

//logout all device
userRoute.post('/logoutall', auth, async function(req, res){
    try{
        req.user.tokens.splice(0, req.user.tokens.length)
        await req.user.save()
        res.send()
    } catch (err){
        res.status(500).send(err)
    }
})
// //update one user
// userRoute.patch('/:id', getUser, async (req,res)=>{
//     if(req.body.name != null){
//         res.user.name = req.body.name
//     }
//     if(req.body.email != null){
//         res.user.email = req.body.email
//     }
//     try {
//         const updatedUser = await res.user.save()
//         res.json(updatedUser)
//     } catch (err) {
//         res.status(400).json({message: err.message})
//     }
// })

// //delete one user
// userRoute.delete('/:id',getUser, async (req,res)=>{
//     try {
//         await res.user.remove()
//         res.json({message: `Delete this user!!!`})
//     } catch(err){
//         res.status(500).json({message: err.message})
//     }
// })

// async function getUser(req, res, next){
//     try {
//         user = await User.findById(req.params._id)
//         if (user == null){
//             return res.status(404).json({message: `Can't find user!!!`})
//         }
//     } catch (err) {
//         return res.status(500).json({message: err.message})   
//     }

//     res.user = user
//     next()
// }

module.exports = userRoute