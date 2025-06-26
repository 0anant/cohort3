const express = require("express");
const jwt =require("jsonwebtoken");
const JWT_SECRET = "praveen@hungedupp";
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
        const token = jwt.sign({
            id: user._id
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

app.post("/todo", (req, res) => {

})

app.get("/todos", (req, res) => {

})
app.listen(3000);
