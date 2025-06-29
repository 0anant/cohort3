const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { JWT_SECRET_PASSWORD } = require("../config");

function adminAuth(req, res, next){
    const token = req.headers.token
    const decode = jwt.verify( token , JWT_SECRET_PASSWORD);

    
    if(!decode){
        res.status(403).json({
            message:"Invalid Admin Id"
        })
    }else{
       res.adminId = decode.indexOf;
       next();
    }

}

function userAuth(req, res, next){
    const token = req.headers.token
    const decoded = jwt.verify(token, JWT_SECRET);

    if(!decoded){
        res.status(403).json({
            message:"Invalid User"
        })
    }else{
        res.userid = decoded.id
    }

}

module.exports = {
    adminAuth,
    userAuth
}