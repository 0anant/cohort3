const express = require("express");
const Router = express.Router();

// you can write
//const { Router } = require("express");
//it does the same thing as the above two lines

const userRouter = Router();

userRouter.post("/signup", auth, async (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const course = req.body.course

    UserModel.create({
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
        res.json({
            message:"You are signed in "
        })
    }

})

module.exports = {
    userRouter: userRouter
}