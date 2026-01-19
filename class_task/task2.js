const http = require("http")

const server = http.createServer((req,res)=>{
    if(req.method == "GET"){
        if(req.url === "/"){
            res.writeHead(200,{
                "content-type" : "text/plain"
            })
            res.end("Welcome to the Home Page");
        }
        else if(req.url === "/about"){
            res.writeHead(200,{
                "content-type":"text/html"
            })
            res.end("<h1>About Page</h1>")
        }
        else if(req.url.startsWith("/user")){
            const url = new URL(req.url,`http://${req.headers.host}`);
            const name = url.searchParams.get("name");
            const age = url.searchParams.get("age");

            const userData = {
                name : name,
                age : age
            }

            res.writeHead(200,{
                "content-type":"application/json"
            }
            );
            res.end(JSON.stringify(userData));
        }
        else{
            res.writeHead(404,{
                "content-type":"text/plain"
            })
            res.end("404 Page not found")
        }
    }
})

server.listen(8001,()=>{
    console.log("Server started")
})