const express = require('express')
const app = express()
app.use(express.json())

patientList = [{
    name: 'John',
    kidneys: [{
        healthyKidney: false,
    },{
        healthyKidney: true,
    }]
}]

//TO SEE THE DATA OF PATIENTS :
app.get('/', function(req,res){
    const johnKidney = patientList[0].kidneys;
    const numberOfKidneys = patientList[0].kidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i=0;i<numberOfKidneys;i++){
        if(johnKidney[i].healthyKidney){
            numberOfHealthyKidneys = numberOfHealthyKidneys+1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        johnKidney,
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

//TO ADD NUMBER OF KIDNEYS (UNHEALTHY OR HEALTHY) :
app.post('/', function(req,res){
    const isHealthy = req.body.isHealthy
    patientList[0].kidneys.push({
        healthyKidney: isHealthy
    })
    res.json({
        msg: "Done"
    })
})

//TO UPDATE THE STATUS OF KIDNEYS (UNHEALTHY TO HEALTHY) :
app.put('/', function(req,res){
    if(checkUnhealthyKidney()){
        for(let i=0;i<patientList[0].kidneys.length;i++){
            patientList[0].kidneys[i].healthyKidney = true
        }
        res.json({})
    }
    else{
        res.status(411).json({
            msg: "All Kidneys are already healthy"
        })
    }
})


//TO DELETE NUMBER OF UNHEALTHY KIDNEYS :
app.delete('/', function(req,res){
    if(checkUnhealthyKidney()){
        const newKidneys = []
        for(let i=0;i<patientList[0].kidneys.length;i++){
            if(patientList[0].kidneys[i].healthyKidney){
                newKidneys.push({
                    healthyKidney: true
                })
            }
        }
        patientList[0].kidneys = newKidneys;
        res.json({
            msg: "Removed Unhealthy Kidney"
        })
    }
    else{
        res.status(411).json({
            msg: "No bad Kidneys"
        })
    }
})

//FUNCTION TO CHECK WHETHER KIDNEY IS HEALTHY OR NOT :
function checkUnhealthyKidney(){
    unhealthyKidney = false
    for(let i=0;i<patientList[0].kidneys.length;i++){
        if(!patientList[0].kidneys[i].healthyKidney){
            unhealthyKidney = true
        }
    }
    return unhealthyKidney
}

app.listen(3000)