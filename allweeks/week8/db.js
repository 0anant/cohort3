const mongoose = require("mongoose");
const Schema = mongoose.Schema();


const User = new Schema.create({
    name: String,
    email:String,
    password: String,
    courses: String
});

const Admin = new Schema.create({
    name:String,
    email: String,
    password: String,

});

const Course = new Schema.create({
    courses:Object
});

const Purchse = new Schema.create({
    purchseItem:Object
});

const AdminModel = new Schema.model('admin', Admin);
const UserModel = new Schema.model('users', User);
const CourseModel = new Schema.model('course', Course);
const PurchaseModel = new Schema.model('admin', Purchase);

module.exports = {
    AdminModel,
    UserModel,
    CourseModel,
    PurchaseModel
}