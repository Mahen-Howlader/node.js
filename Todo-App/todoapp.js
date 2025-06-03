const http = require("http");
const path = require("path");
const fs = require("fs")

const filePath = path.join(__dirname, "./db/todo.json");

const server = http.createServer((req, res) => {
    // get todo data and 
    // Post todo data 
    const pathName = new URL(req.url, `http://${req.headers.host}`)
    const pathname = pathName?.pathname;

    // GET ALL TODO?
    if (pathname === "/todos" && req.method === "GET") {
        const data = fs.readFileSync(filePath, { encoding: "utf-8" })
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'email': 'mahin@gmail.com'
        });

        res.end(data);

    }
    // POST TODO?
    else if (pathname === "/todos/create-todo" && req.method === "POST") {
        let data = "";
        req.on("data", (chunk) => {
            data = data + chunk;
        })
        req.on("end", () => {
            const { name, price } = JSON.parse(data);
            const createAt = new Date().toLocaleString();

            const alltodos = fs.readFileSync(filePath, { encoding: "utf-8" })
            const parseAllTodo = JSON.parse(alltodos);
            parseAllTodo.push({ name, price, createAt });

            fs.writeFileSync(filePath, JSON.stringify(parseAllTodo, null, 2), { encoding: "utf-8" });
            res.end(JSON.stringify({ name, price, createAt }, null, 2))
        })
    }
    // get single todo 
    else if (pathname === "/todo" && req.method === "GET") {
        const search = pathName?.searchParams.get("title");
        const data = fs.readFileSync(filePath, {encoding : "utf-8"});
        const parseData = JSON.parse(data);
        const todo = parseData.find((todo) => todo.name === search);
        const stringify = JSON.stringify(todo);
        res.writeHead(200, {
            "content-type" : "application/json"
        })
        res.end(stringify);
    }

    // else 
    else {
        res.end("Todo not found")
    }
});

// Use localhost or 0.0.0.0 instead of 192.0.0.1
server.listen(5000, "127.0.0.1", () => {
    console.log("Server listening to port 5000");
});
