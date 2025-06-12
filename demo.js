// const fs = require('fs');

// fs.readFileSync("a.txt","utf-8",function(err, contents){
//     console.log(contents);
// });


// fs.readFileSync("b.txt","utf-8", function(err, contents2){
//     console.log(contents2); 
// });

// fs.readFileSync("b.txt","utf-8", function(err, contents3){
//     console.log(contents3); 
// });                              //----it's running synchronously


const fs = require('fs');

fs.readFile("a.txt","utf-8",function(err, contents){
    console.log(contents);
});


fs.readFile("b.txt","utf-8", function(err, contents2){
    console.log(contents2); 
});

fs.readFile("b.txt","utf-8", function(err, contents3){
    console.log(contents3); 
});                             // ----it's running asynchronously

