const express = require("express");
const bcrypt = require("bcrypt");
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const jwt  = require("jsonwebtoken");
const mongoose = require("mongoose");
const { z } = require("zod");

mongoose.connect("");

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
    const requireBody = z.object({
     email: z.string(),
     password: z.string(),
     name: z.string()
    })

    //const parsedData = requireBody.parse(req.body);
    const parseDataWithSuccess = requireBody.safeParse(req.body);

    if(!parseDataWithSuccess.success){
        res.json({
            message: "Incorrect format",
            error: parseDataWithSuccess.error
        })
        return
    }

    let throwError = false
    try{
    const hashedPassword = await bcrypt.hash(password, 5);
    console.log(hashedPassword);

    await UserModel.create({
        email:email,
        password: hashedPassword,
        salt: salt,
        name: name
    });
    }
    catch(e){
        res.json({
            message: "User already exists"
        })
        throwError = true
        //console.log("error while putting in the DB");
    }
    if(!throwError){
        res.json({
        message: "you are logged in"
    })
    }

})

app.post("/signin", async (req, res) => {
    const email = req.body.email
    const password = req.body.password 

    const response = await UserModel.findOne({
        email: email,
    });

    if(!response){
        res.status(403).json({
            message: "User does not exists"
        })
    }
    const passwordMatched = await bcrypt.compare(password,response.password);

    if(passwordMatched){
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET);
        
        res.json({
            token: response._id
        })
    }else{
        res.status(403).json({
            message: "Invalid credentials"
        })
    }
    
})

app.post("/todo", auth, (req, res) => {
    
})

app.post("/todos", auth, (req, res) => {
    
})
app.listen(3000);