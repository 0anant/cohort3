const express = require("express")
const jwt = require("jsonwebtoken")

const JWT_SECRETS = "iloveaishwariyarai___"

const app = express()

app.use(express.json());


let users = []

app.post("/signup", (res, req) => {
    const username = req.body.username
    const password = req.body.password
    
    
    users.push({
        username: username,
        password: password
    })

    res.json({
        message:"you are signed up"
    })

    console.log(users);
})
app.post("/signin", (res, req) => {
    const token = req.header.token
    const info = token.verify({
        username
    }, JWT_SECRETS)

    const username = info.username

    let foudUser = null;
    for(let i =0; i<users.length; i++){
        if(user[i].username == username){
            foundUser[i];
        }
    }
    if(foudUser){
        res.json({
            username: username,
            password: password
        })
    }else{
        res.statusCode(403).send({
            mesaage:"Invalid token"
        })
    }
})
app.get("/me", (res, req) => {

})
app.listen(3000)