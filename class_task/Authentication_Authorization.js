const express = require("express");
const app = express();

app.use(express.json());

let users = [
    {id:1,name:"Rishabh",email:"rishabh@gmail.com",password:"1234",role:"Admin"},
    {id:2,name:"Yateesh",email:"yateesh@gmail.com",password:"6789",role:"user"},
]

let validTokens = [];

app.post("/login",(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({message:"Email and password are required."})

    }
    const user = users.find((u)=>u.email === email && u.password === password);
    if(!user){
        return res.status(401).json({message:"Invalid credentials"});
    }

    const token = `token-${user.id}-${Date.now()}`;
    validTokens.push(token);

    res.json({message:"Login successfully",token});
})

const authenticate = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: Token missing" });
  }
  if (!validTokens.includes(token)) {
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
  next();
};

app.get("/dashboard", authenticate, (req, res) => {
  res.json({message:"Welcome to the dashboard!",data:"Sensitive dashboard data",});
});

app.get("/profile", authenticate, (req, res) => {
  res.json({message:"User profile data",profile:{info: "Confidential profile information"},});
});

app.listen(8000,()=>{
    console.log("server started");
})
