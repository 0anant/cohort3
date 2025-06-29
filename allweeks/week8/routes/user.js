const express = require("express");
const Router = express.Router();

const jwt  = require("jsonwebtoken")
const { JWT_SECRET } = require("../config")


// you can write
//const { Router } = require("express");
//it does the same thing as the above two lines

const userRouter = Router();

userRouter.post("/signup", auth, async (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const course = req.body.course

    await UserModel.create({
        email: email,
        password:password,
        name:name,
        course:course
    })

    res.json({
        message:"you are signed up"
    })
 
})

userRouter.post("/signin", auth, async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const response = await UserModel.findOne({
        email: email,
        password:password
    })

    if(!response){
        res.status(403).json({
            message:"Invalid credentials"
        })
    }else{
        const token = jwt.sign({
            id: userRouter._id
        }, JWT_SECRET);
        res.json({
            message:"token "
        })
    }

})

module.exports = {
    userRouter: userRouter
}