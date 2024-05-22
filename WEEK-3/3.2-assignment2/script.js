const mongoose = require("mongoose")
const express = require("express")
const app = express()

app.use(express.json())

mongoose.connect("mongodb+srv://praneetog:77818@cluster0.y8tzrtt.mongodb.net/userLogin");

const User = mongoose.model("data", {
    name: String,
    username: String,
    password: String,
});

app.post('/signup', async function(req,res){
    const username = req.body.username
    const password = req.body.password
    const name = req.body.name

    const existingUser = await User.findOne({username: username}) 
    // Added await to ensure that fucntion checks whether user exists or not before creating user  
    if(existingUser){
        return res.status(400).send("Username already exists")
    }

    const user = new User({
        name: name,
        username: username,
        password: password
    });
    
    await user.save() // Added await to ensure user is saved before sending response
    
    res.json({
        "msg": "User created successfully"
    })
})

app.listen(3000)
