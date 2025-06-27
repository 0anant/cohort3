const mongoose = require("mongoose");
const { Schema } = mongoose;
// const ObjectId = mongoose.ObjectId;


const User = new Schema({
    name: String,
    email:String,
    password: String,
    userId: ObjectId
});

const Admin = new Schema({
    name:String,
    lastName:String,
    email: String,
    password: String,
    adminId: ObjectId
});

const Course = new Schema({
    courseId:Object,
    title:String,
    description: String,
    price:Number,
    imageUrl: String,
    creatorId: ObjectId
});

const Purchase = new Schema({
    purchseId:ObjectId,
    coursesId:ObjectId,
    userID:ObjectId
});

const AdminModel =  mongoose.model('admin', Admin);
const UserModel =  mongoose.model('users', User);
const CourseModel =  mongoose.model('course', Course);
const PurchaseModel =  mongoose.model('purchase', Purchase);

module.exports = {
    AdminModel,
    UserModel,
    CourseModel,
    PurchaseModel
}