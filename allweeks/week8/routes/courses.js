const { Router } = require("express");

const courseRouter = Router();

courseRouter.get("/purchse", (req, res) => {
    res.send('purchase endpoint');
})

courseRouter.get("/courses", (req, res) => {
    res.send('courses endpoint');
})

module.exports = {
    courseRouter:courseRouter
}