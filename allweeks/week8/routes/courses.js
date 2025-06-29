const { Router } = require("express");
const { adminAuth } = require("../middlewares/adminAuth");
const { PurchaseModel, CourseModel } = require("../db");


const courseRouter = Router();

courseRouter.get("/purchse", adminAuth, async (req, res) => {
    const userId = req.body.userId
    const courseId = req.body.courseId

    await PurchaseModel.create({
        userId,
        courseId
    })
    res.json({
        message:"course has been purchased"
    })
})

courseRouter.get("/courses", async (req, res) => {
    const course = await CourseModel.find()
    res.json({
        course
    })
})

module.exports = {
    courseRouter:courseRouter
}