const express = require('express')
const app = express()
const port = 3000

//route handlers

//route for GET method
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//route for POST method
app.post('/post', (req, res) => {
    res.send('put data on the database')
})

//route for DELETE method
app.delete('/delete', (req, res) => {
    res.send('delete the data')
})
//route for PUT method
app.put('/put', (req, res) => {
    res.send('put or update the data')
})
//which prot you want to listen
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
