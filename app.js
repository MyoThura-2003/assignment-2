const express=require('express')
const path=require('path')
const { send } = require('process')
const app=express()
app.use(express.static('./public'))
app.get('/',(req,res)=>{
    res.sendfile(path.resolve (dirname,'index.html'))})
    app.all('*',(req.res)=>{
        res.status(404).send('resounce not found')
    })
    app.listen(5000,()=>{
        console.log('server is listening on post 5000')
    })



