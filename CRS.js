const fs = require("fs");

const read = fs.createReadStream("./CRS1.txt", { encoding: "utf-8" });
const writer = fs.createWriteStream("./CRS2.txt", { encoding: "utf-8" });


read.on("data", (data) => {
    console.log(data);

    writer.write(data, (err) => {
        if(err){
            throw Error("error", err)
        }
    })
});


read.on("error", (err) => {
    if(err){
        throw Error("Error", err);
    }
});

writer.on("error", (err) => {
    if(err){
        throw Error("Error", err)
    }
});

read.on("end", () => {
    console.log("reading ended");
    writer.end();
});

writer.on("finish", () => {
    console.log("Write Successfully")
})