const express = require("express");

const app = express();

// app.use(express());
app.use(express.json());

// let users = [{
//     username:"username",
//     password:"password",
//     token:"token"
// }]               gives error
let users = [];

function generateToken(){
    let oken = Math.random()
    return(toString(oken));
}
app.post('/signup', (res, req) => {
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

app.post('/signin', (res, req) => {
    const username = req.body.username
    const password = req.body.password

    let user = null;
    for (let i =0; i<users.length; i++){
        if(users[i].username == username && users[i].password == password){
            user = users[i];
        }
    }

    if(user){
        const tokenn = generateToken();
        user.token = tokenn;
        res.json({
            message:"token"
        })
    }else{
        res.statusCode(403).send({
            message:"Invalid user"
        })
    }
    console.log(users);
    
    // const user = users.find((u) => {
    //     if(u.username == username && u.password == password){
    //         const tokenn = genetareToken()
    //         users.push = tokenn;
    //          res.json({
    //             message: "token"
    //         })
    //     }else{
    //         res.statusCode(403).send({
    //             message:"Invalid user"
    //         })
    //     }
    // })

})

app.get("/me", (res, req) => {
    const token = req.headers.token

    let founduser = null;

    for(let i =0; i<users.length; i++){
        if(users[i].token == token){
            founduser[i]
        }
    }
    if(founduser){
    res.json({
        username: founduser.username,
        password: founduser.password
    })
    } else{
        res.json({
            message: "token invalid please enter valid token"
        })
    }
})

app.listen(3000);
