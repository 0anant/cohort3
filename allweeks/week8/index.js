const express = require("express");
const mongoose = require("mongoose");
const {UserModel, AdminModel, PurchaseModel, CourseModel } = require("./db");
const { userRouter } = require("./routes/user");
const { adminRouter } = require("./routes/admin");
const { courseRouter } = require("./routes/courses");


mongoose.connect("mongodb+srv://jaaaan697:kPZHkvXoP0JVVRk0@cluster0.gwos7wf.mongodb.net/course-selling-app");
const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/courses", courseRouter);


async function main(){
    
    await mongoose.connect("mongodb+srv://jaaaan697:kPZHkvXoP0JVVRk0@cluster0.gwos7wf.mongodb.net/course-selling-app")
    app.listen(3000);
    console.log("listening to port");

}

main();