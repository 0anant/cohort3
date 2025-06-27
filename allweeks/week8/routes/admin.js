const express = require("express");
const Router = express.Router();

// you can write
//const { Router } = require("express");
//it does the same thing as the above two lines

const adminRouter = Router();

adminRouter.post("/signup", adminAuth, (req, res) => {
    res.send('signed up endpoint');
})

adminRouter.post("/login", adminAuth, (req, res) => {
    res.send('login endpoint');
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