//creating a http server
//express
//node default library => no

const express = require("express");

const app = express();

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
app.put('/put', (req, res) => {

})

//route post
app.post('/post', (req, res) => {

})

//route delete
app.delete('/delete', (req, res) => {

})

app.listen(3000);