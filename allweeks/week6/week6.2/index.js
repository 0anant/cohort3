const express = require("express")
const jwt = require("jsonwebtoken")
const JWT_SECRET = "ilove_you_zenn"

const app = express()
app.use(express.json());

let users =[];

function auth(req, res, next){
    const token = req.headers.token;
    const decode = jwt.verify(token, JWT_SECRET);
    if(decode.username){
        req.username = decode.username;
         next()
    }else{
        res.json({
            message:"Username does not exits"
        })
    }
   
}

// app.use(auth());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/signup", (req, res) => {
    const username  = req.body.username
    const password = req.body.password

    users.push({
        username: username,
        password: password
    })

    res.json({
        message:"You are signed up"
    })

    console.log(users);

})

app.post("/signin", (req, res) => {
    const username = req.body.username
    const password = req.body.password
    //const token = req.headers.token
    //const decodeInfo = token.signin({username}, JWT_SECRETS)

    let foundUser = null;

    for(let i= 0; i<users.length; i++){
        if(users[i].username == username && users[i].password == password){
            foundUser = users[i];
        }
    }
    if(foundUser){
        const token = jwt.sign({
            username
        }, JWT_SECRET);
        res.json({
            token: token
        })
    }else{
        res.status(403).send({
            message:"invalid user"
        })
    }

})

app.get("/me", (req, res) => {
    
   // const username = decodedData.username;
    let foundUser = null;

    for(let i=0; i< users.length; i++){
        if(users[i].username == decode.username){
            foundUser = users[i];
        }
    }
    res.json({
        username: foundUser.username,
        password:foundUser.password
    })
   


})

app.listen(3000);