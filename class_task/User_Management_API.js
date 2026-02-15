const express = require("express");
const app = express();

app.use(express.json()); 

let users = [
    {id:1,name:"Rishabh",email:"rishabh@gmail.com",role:"Admin"},
    {id:2,name:"Yateesh",email:"yateesh@gmail.com",role:"user"},
]

const logger = (req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
}

app.use(logger);

const validateuser = (req,res,next)=>{
    const {name,email,role} = req.body;
    if(!name || !email || !role){
        return res.status(400).json({message:"Invalid input"})
    }
    next();
}

app.get("/users",(req,res)=>{
    res.json(users);
})

app.get("/users/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const user = users.find((u)=>u.id===id);

    if(!user){
        return res.status(404).json({message:"user not found"});
    }
    res.json(user);
})


app.post("/users",validateuser,(req,res)=>{
    const {name,email,role} = req.body;
    const newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,name,email,role,
    }
    users.push(newUser);
    res.json(newUser);
})

app.put("/users/:id",validateuser,(req,res)=>{
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex((u)=>u.id === id);
    if(userIndex === -1){
        return res.status(404).json({message:"User not found"});
    }
    const {name,email,role} = req.body;
    users[userIndex] = {
        id,name,email,role,
    }

    res.json(users[userIndex]);
})

app.delete("/users/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex((u)=> u.id === id);

    if(userIndex === -1){
        return res.status(404).json({message:"user not found"});
    }

    const deletedUser = users.splice(userIndex,1);

    res.json({message:"User deleted successfully",user:deletedUser[0]});
})

app.listen(8000,()=>{
    console.log("server started");
})