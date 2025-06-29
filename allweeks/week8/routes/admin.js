const express = require("express");
const { AdminModel, CourseModel } = require("../db");
const Router = express.Router();

const jwt = require("jsonwebtoken")
const { JWT_SECRET_PASSWORD } = require("../config");
const { adminAuth } = require("../middlewares/adminAuth");

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
    

adminRouter.post("/createCourse",adminAuth,  async (req, res) => {
    const adminId = req.userId

    const { title, description, imageUrl, price, creatorId } = req.body;

    await CourseModel.create({
        title: title,
        price:price,
        description : description,
        imageUrl: imageUrl,
        creatorId: creatorId
    })

    res.json({
        message:"Course Created",
        courseId: course._id
    })
})


adminRouter.post("/deleteCourse", adminAuth, async(req, res) => {
    const courseId = req.courseId
    const adminId = req.adminId
    const deleteCourse = await CourseModel.findOne({
        _id: courseId,
        creatorId: adminId
})

    if(!deleteCourse){
        res.json({
            message:"wrong C=courseId"
        })
    }else
    {
        CourseModel.delete(deleteCourse);
        res.json({
            message:"Course Deleted"
        })
    }
   
})

adminRouter.post("/addCourseContent", async (req, res) => {
    const { title, description, imageUrl, price, courseId } = req.body

    const adminId = req.userId

    const courseUpdate = await CourseModel.updateOne({
        _id: courseId,
        creatorId: adminId
    },{
        title:title,
        description:description,
        price:price,
        imageUrl:imageUrl,
        course:courseId
    })
    res.json({
        message:"Course Updated",
        courseId: course._id
    })
    
})

module.exports = {
    adminRouter:adminRouter
}
