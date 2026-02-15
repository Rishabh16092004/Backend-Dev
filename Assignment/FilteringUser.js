const express = require("express");
const app = express();

const users = [
    {id:1,name:"Rishabh"},
    {id:2,name:"Aman"},
    {id:3,name:"Durgesh"}
]

app.get("/users",(req,res)=>{
    const {name} = req.query;
    if(!name){
        return res.send(users);
    }

    const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(name.toLowerCase())
    );

  res.json(filteredUsers);
})

app.listen(8000,()=>{
    console.log("Server started....");
})