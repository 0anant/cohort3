require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const {UserModel, AdminModel, PurchaseModel, CourseModel } = require("./db");
const { userRouter } = require("./routes/user");
const { adminRouter } = require("./routes/admin");
const { courseRouter } = require("./routes/courses");

const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/courses", courseRouter);


async function main(){

    await mongoose.connect(process.env.MONGO_URL)
    app.listen(3000);
    console.log("listening to port");

}

main();