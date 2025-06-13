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


// const fs = require('fs');

// fs.readFile("a.txt","utf-8",function(err, contents){
//     console.log(contents);
// });


// fs.readFile("b.txt","utf-8", function(err, contents2){
//     console.log(contents2); 
// });

// fs.readFile("b.txt","utf-8", function(err, contents3){
//     console.log(contents3); 
// });                             // ----it's running asynchronously

// const fs = require("fs");

// function print(err,data){
//     console.log("error is");
//     console.log(err);
//     console.log("data is");
//     console.log(data);
// }

// fs.readFile("/Users/nisha/Desktop/cohort 3/demo pgm/allweeks/week1/a.txt", "utf-8", print);
// fs.readFile("/Users/nisha/Desktop/cohort 3/demo pgm/allweeks/week1/b.txt", "utf-8", print);

// console.log("Done!");            //it works asynchronously  o/p:  Done! , Hi there , Praveen here

function timeout(){
    console.log("click the butoon");
}

console.log("Hi there");

setTimeout(timeout, 1000);

console.log("Welcome to loupe");

let c = 0;
for(let i = 0; i<10000000 ; i++ ){
    c = c+1;
}

console.log("expensive operation done!");