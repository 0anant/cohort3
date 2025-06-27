const express = require("express");
const mongoose = require("mongoose");
const {UserModel, AdminModel, PurchaseModel, CourseMode } = require("./db");

mongoose.connect("");
const app = express();

app.use(express.json());

app.post("/usersignup", auth, async (req, res) => {
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

app.post("/usersignin", auth,  (req, res) => {
    const email = req.body.email
    const password = req.body.password

    

})

app.post("/purchse", (req, res) => {

})

app.get("/courses", (req, res) => {

})

app.post("/adminsignup", adminAuth, (req, res) => {

})

app.post("/adminlogin", adminAuth, (req, res) => {
    
})

app.post("/createCourse", (req, res) => {
    
})

app.post("/deleteCourse", (req, res) => {
    
})

app.post("/addCourseContent", (req, res) => {
    
})

app.listen(3000);