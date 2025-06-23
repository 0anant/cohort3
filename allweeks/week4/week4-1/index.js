//creating a http server
//express
//node default library => no

const express = require("express");

const app = express();

app.use(express.json());

var users = [{
    name: 'jhon',
    kidneys: [{
        healthy: false},
        {
            healthy: true
        }]
}];


//route get
app.get('/', (req, res) => {
    //logic to get no of kidneys and how many are heathy or not
    const johnKidneys =users[0].kidneys;
    const noOfKidneys =johnKidneys.length;
    let noOfHealthyKidneys = 0;
    for (let i =0; i<johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
            noOfHealthyKidneys = noOfHealthyKidneys + 1;
        }
    }
    let noOfUnheathyKidneys = noOfKidneys - noOfHealthyKidneys;
    res.json({
        johnKidneys,
        noOfHealthyKidneys,
        noOfUnheathyKidneys
    });
   
})

//route put
app.put('/', (req, res) => {
    for (let i =0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({})

})

//route post
app.post('/', (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "done"
    })

})

//route delete
app.delete('/', (req, res) => {
    const newKidneys = []
    for (let i=0; i<users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({msg: "done!"})

})

app.listen(3000);