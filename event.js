const { EventEmitter } = require("node:stream");
class SchoolBell extends EventEmitter{};

const schoolBell = new SchoolBell();

schoolBell.on("ring", ()=> {
    console.log("Yahoo ! class ses!");
})

schoolBell.on("ring", () => {
    console.log("Yea ami ekhon basay jabo !");
})
schoolBell.on("broken", ()=> {
    console.log("class ki ar ses hobe nah!!")
})


schoolBell.emit("ring");
schoolBell.emit("broken");