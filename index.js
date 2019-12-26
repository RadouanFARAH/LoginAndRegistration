const express = require('express')
const app = express()
const router =require('./router/router')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/AuthDB', {useNewUrlParser : true, useUnifiedTopology: true}).then(
    ()=>{console.log('mongodb connected')}
).catch(()=>{console.log('error connecting to DB')})

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended : false}))

app.use('/', router)

app.listen(3000, console.log('app is running '))