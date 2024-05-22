const express = require("express")
const app = express()
app.use(express.json())

//Middleware to verify age
function verifyAgeMiddleware(req,res,next){
    const age = req.query.age
    if(req.body.age >= 18){
        next()
    } else {
        res.json({
            "msg": "Your age didn't meet the requirements"
        })
    }
}

//Instead of writing middleware function in every function you can use this :
/* app.use(verifyAgeMiddleware) */
//NOTE : From the point you use the above line, it will be applicable on upcoming functions 

app.get('/ride1', verifyAgeMiddleware, function(req,res){
    res.json({
        "msg": "Ride Completed"
    })
})

app.get('/ride2', verifyAgeMiddleware, function(req,res){
    res.json({
        "msg": "Ride Completed"
    })
})


app.listen(3000)