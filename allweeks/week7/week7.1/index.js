const express = require("express");
const jwt =require("jsonwebtoken");
const JWT_SECRET = "praveen@hungedupp";
//const {auth, JWT_SECRET, jwt } = require("./auth");
const { UserModel, TodoModel } = require("./db");
const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb+srv://jaaaan697:kPZHkvXoP0JVVRk0@cluster0.gwos7wf.mongodb.net/todo-praveen-11");
const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name

    await UserModel.create({
        email: email,
        password: password,
        name: name
    });

    res.json({
        message: "You are logged in"
    })


})

app.post("/login", async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const user = await UserModel.findOne({
        email: email,
        password: password
    })
    console.log(user);
    if(user){
        console.log(user);
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET);
        res.json({
            token: token
        })
    }else{
        res.status(403).json({
            message:"Invalid credentials"
        })
    }
})

app.post("/todo", auth, (req, res) => {
    const userId = req.userID;

    res.json({
        userId: userId
    })

})

app.get("/todos", auth, (req, res) => {
    const userId = req.userID;

    res.json({
        userId: userId
    })

})
function auth(req, res, next){
    const token = req.headers.token

    const response = jwt.verify(token, JWT_SECRET);

    if(response){
        req.userId = token.Id;
        next()
    }else{
        res.status(403).json({
            message:"Invalid credentials"
        })
    }
}

app.listen(3000);
