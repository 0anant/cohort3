const http = require("http");
const fs = require("fs");

http.createServer(function(req, res)
{
    res.write("hello world");
    res.end();

}).listen(8000);