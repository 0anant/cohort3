const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://jaaaan697:kPZHkvXoP0JVVRk0@cluster0.gwos7wf.mongodb.net/course-selling-app");
const  Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;


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