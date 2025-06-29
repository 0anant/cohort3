const express = require("express");
const { AdminModel } = require("../db");
const Router = express.Router();

const jwt = require("jsonwebtoken")
const { JWT_SECRET_PASSWORD } = require("../config")

// you can write
//const { Router } = require("express");
//it does the same thing as the above two lines

const adminRouter = Router();

adminRouter.post("/signup", adminAuth, async (req, res) => {
     const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const course = req.body.course

    await AdminModel.create({
        email: email,
        password:password,
        name:name,
        course:course
    })

    res.json({
        message:"you are signed up"
    })
})

adminRouter.post("/login", adminAuth, async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    
    const response = await AdminModel.findOne({
            email: email,
            password:password
        })
    
        if(!response){
            res.status(403).json({
                message:"Invalid credentials"
            })
        }
        else
        {
            const token = jwt.sign({
                id: adminRouter._id
            }, JWT_SECRET_PASSWORD);
            res.json({
                message:"token "
            })
        }
    
})
    

adminRouter.post("/createCourse", (req, res) => {
    res.send('course endpoint');
})

adminRouter.post("/deleteCourse", (req, res) => {
    res.send('deletecourse endpoint');
})

adminRouter.post("/addCourseContent", (req, res) => {
    res.send('added course content endpoint');
})

module.exports = {
    adminRouter:adminRouter
}
