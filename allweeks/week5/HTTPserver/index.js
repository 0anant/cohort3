const express = require("express")

const app = express();


//better routing ,add middlewares and databases
//write a middlewares that logs the method , timestamp and the url
// let numOfReq = 0;

// function noOfReq(req, res, next){
//     numOfReq = numOfReq + 1;
//     console.log("total no requests = " + numOfReq)
//     next();
// }

// function middlewares(req, res, next){
//     console.log("method request is =" + req.method);
//     console.log("url is =" + req.url);
//     console.log(new Date());

//     next();
// }

// app.use(middlewares);
// app.use(noOfReq);
app.use(express.json())
app.post('/multiply', (req, res) => {
    console.log(req.body);
    const a = req.body.a
    const b = req.body.b

    res.json({
        ans: a*b
    })
})

// app.get('/add', (req, res) => {
     
//     const a = parseInt(req.query.a)
//     const b = parseInt(req.query.b)

//     res.json({
//         ans: a+b
//     })
// })

// app.get('/subtract', (req, res) => {
    
//     const a = parseInt(req.query.a)
//     const b = parseInt(req.query.b)

//     res.json({
//         ans: a-b
//     })
// })

// app.get('/divide', (req, res) => {
    
//     const a = req.query.a
//     const b = req.query.b

//     res.json({
//         ans: a/b
//     })
// })

app.listen(3000)