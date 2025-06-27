const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("");
const app = express();

app.use(express.json());

app.post("/usersignup", auth, (req, res) => {

})

app.post("/usersignin", auth,  (req, res) => {

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