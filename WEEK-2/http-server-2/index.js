const express = require("express")

const app = express()

app.get('/', function(req,res){
    res.send("I'm here")
})

app.listen(3000)