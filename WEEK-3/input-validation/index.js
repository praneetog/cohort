const express = require("express")
const zod = require("zod")
const app = express()
app.use(express.json())

const schema = zod.array(zod.string())

/*
    For logging in, check for correct email and password :
    const schema = zod.object({
        email: zod.string().email()
        password: zod.string().min(8)
    })
    keep these inside a function to validate input
*/
app.post('/health-checkup', function(req,res){
    const kidneys = req.body.kidneys
    const response = schema.safeParse(kidneys)

    if(!response.success){
        res.status(411).json({
            msg: "Invalid Input"
        })
    } else {
        res.send({
            response
        })
    }
})

app.listen(3000)