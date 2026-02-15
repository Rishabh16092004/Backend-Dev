const express = require("express");
const app = express();

app.use((req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.url} - ${duration} ms`);
  });

  next();
});

app.get("/home",(req,res)=>{
    res.send("Home page");
})

app.get("/about",(req,res)=>{
    setTimeout(() => {
    res.send("About Page (delayed)");
  }, 1000);
})

app.listen(8000,()=>{
    console.log("server started...");
})