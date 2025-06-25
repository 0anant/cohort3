const express = require("express")
const jwt = require("jsonwebtoken")

const app = express();

// app.use(express());
app.use(express.json());

let users = [];

function generateToken(){
    return(toString(Math.randon()));
}

app.post("/signup", (res, req) => {
    const usernmae = req.body.username
    const password = req.body.password

    users.push({
        username: username,
        password: password
})
    res.json({
        message:"you are signed up"
    })

})

app.post("/signin", (res, req) => {
    const username = req.body.username
    const password = req.body.password

    let foundUser = null;

    for (let i =0; i<users.length; i++){
        if(users[i].username == username && users[i].password == password){
            foundUser[i];
        }
    }
    if(foundUser){
        const token = jwt.sign({
            username: username
        },JWT_SECRET);

        res.json({
            token: token
        })
    }else{
        res.status(403).send({
            message:"Invalid user"
        })
    }
    console.log(users)
    
})

app.get("/me", (res, req) => {
    const token = req.headersSent.token // jwt
    const decodedInformation = jwt.verify(token, JWT_SECRET);

    const username = decodedInformation.username

    let found = null;

    for(let i =0; i<users.length; i++){
        if(users[i].username == username){
            found[i]
        }
    }
    if(found){
        res.json({
            username: found.username,
            password: found.password
        })
    }else{
        res.json({
            message: "invalid username"
        })
    }
    
})

app.listen(3000)