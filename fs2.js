const fs = require("fs")

fs.readFile("./hello.txt", { encoding: "utf-8" }, (err,data) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    // console.log('File contents:', data);

    fs.writeFile("./hello-world.txt", data, {encoding : "utf-8"}, (err,data) => {
        if(err){
            console.log("Something went wrong",err);
            return
        }
    console.log("write successful")
    })



})