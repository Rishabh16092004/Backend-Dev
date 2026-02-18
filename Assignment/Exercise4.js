const express = require("express");
const app = express();
app.use(express.json());

let books = [
  { id: 1, title: "Atomic Habits", author: "James Clear", year: 2018 },
  { id: 2, title: "Deep Work", author: "Cal Newport", year: 2016 },
  { id: 3, title: "Ikigai", author: "Hector Garcia", year: 2017 },
  { id: 4, title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
];

app.get("/books",(req,res)=>{
    res.json(books);
})

app.post("/books",(req,res)=>{
    const body = req.body;
    const newauthor = {id : books.length+1,body};
    books.push(newauthor);
    res.json(newauthor);
    
})

app.patch("/books/:id",(req,res)=>{
    const id = req.params.id;
    const user = books.find((u)=> u.id == id);
    if(!user){
        res.status(400).json({message:"user not found"});
    }
    Object.assign(user,req.body);
    res.json({message:"User updated successfully",user});
})

app.delete("/books/:id",(req,res)=>{
    const id = req.params.id;
    const index = books.findIndex((u)=> u.id == id);
    if(index === -1){
        res.status(500).json({message:"user not found"});
    }
    const deleteuser = books.splice(index,1);
    res.json({message:"User deleted successfully",deleteuser});
})

app.listen(8000, () => console.log("Server running"));
