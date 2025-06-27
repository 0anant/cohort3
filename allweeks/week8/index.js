const express = require("express");
const mongoose = require("mongoose");
const {UserModel, AdminModel, PurchaseModel, CourseModel } = require("./db");
const { userRouter } = require("./routes/user");
const { adminRouter } = require("./routes/admin");
const { courseRouter } = require("./routes/courses");


mongoose.connect("");
const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/courses", courseRouter);



app.listen(3000);