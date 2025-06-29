const jwt = require("jsonwebtoken");
const JWT_SECRET = "hdgvdaky@kdhfjb";

function adminAuth(req, res, next){
    const adminId = req.body.adminId

    const response = AdminModel.findOne({
        adminId : adminId
    })
    if(!response){
        res.status(403).json({
            message:"Invalid Admin Id"
        })
    }else{
        res.json({
            message:"Admin has logged in"
        })
    }

}

function userAuth(req, res, next){
    const userId = req.body.adminId

    const response = UserModel.findOne({
        userId : userId
    })
    if(!response){
        res.status(403).json({
            message:"Invalid User"
        })
    }else{
        res.json({
            message:"User has logged in"
        })
    }

}