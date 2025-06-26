const jwt =require("jsonwebtoken");
const JWT_SECRET = "praveen@hungedupp";

function auth(req, res, next){
    const token = req.headers.authorization

    const response = jwt.verify(token, JWT_SECRET);

    if(response){
        req.userId = token.userId;
        next()
    }else{
        res.status(403).json({
            message:"Invalid credentials"
        })
    }
}

module.exports = {
    auth, JWT_SECRET
}