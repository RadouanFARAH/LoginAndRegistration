const express = require('express')
const app = express()
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')


router.get('/', (req, res)=>{
    res.render('SignIN', {error:null, msg:null})
})

router.post('/login', (req, res)=> {
    const {email, password}=req.body
    User.findOne({email}).then((user)=>{
        
        if (user && user.password===password) {
            res.render('welcome', {user:user.firstName})
        }
        else {
            res.render('SignIN', {error:"Authentification failed try again", msg:null})
        }
        
    })
})
router.get('/login', (req, res)=> {
    res.render('SignIN', {error:'',msg:null})
})
router.get('/logout', (req, res)=> {
    res.render('SignIN', {error:'',msg:"You are logged out"})
})

router.post('/register', (req, res)=> {
    const {firstName, lastName, email, password}=req.body;
    
    User.findOne({email}).then((user)=> {

        if (user) {
            res.render('SignUP', {error:'User already exists'})
        }
        else {
            const newUser = new User({firstName, lastName, email, password})
            newUser.save()
            .then((user)=>{
                res.redirect('/login')})
            .catch((err)=>{console.log(err)})
        }

    })
    .catch((err)=>{console.log(err)})
})

router.get('/register', (req, res)=> {
    res.render('SignUP',{error:''})
})

module.exports = router ;
