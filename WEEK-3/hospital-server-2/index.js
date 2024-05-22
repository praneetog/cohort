const express = require("express")
const app = express()
app.use(express.json())

app.get('/health-checkup', function(req,res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if(username != 'praneet' || password != 'pass'){
        res.status(400).json({"msg": "Incorrect inputs"})
        return
    }

    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({"msg": "Incorrect inputs"})
        return
    }
    
    res.json({
        msg: "Your kidney is fine"
    })
})

app.listen(3000)