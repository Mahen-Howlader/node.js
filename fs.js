// create entry
// read 
// update 
// delete


//================== synchronous
const { error } = require('console');
const fs = require('fs');
// console.log("Task 1");

const text = "learning file system";
fs.writeFileSync("./hello.txt", text);
const data = fs.readFileSync("./hello.txt", { encoding: "utf-8" });
// console.log(data);

// console.log("Task 3");




//================== asynchronous 
console.log("task1");        // Synchronous – prints first
const fsa = require("fs");
let textAsy = "node js";


fsa.writeFile("./hello.txt", textAsy, {encoding : "utf-8"}, (error) => {
    if(error){
        console.log("someting went wrong", error)
        return
    }
    console.log('File written successfully!');
} )

fsa.readFile("./hello.txt", { encoding: "utf-8" }, (error, data) => {
    if (error) {
        console.log("something went wrong");
        return;
    }
    console.log("asyncFun", data)
});




console.log(textAsy);           // Runs before the file is read – prints undefined
console.log("task2");        // Runs before the callback – prints second
