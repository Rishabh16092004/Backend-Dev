const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/viva")
.then(()=>{
    console.log("Connected")
})
.catch((err)=>{
    console.log(err);
})

const productSchema = mongoose.Schema({
    name: {
        type : String,
        require:true
    },
    price:{
        type:Number,
        require:true 
    },
    inStock :{
        type:Boolean,
        require:true
    }
})

const Product = mongoose.model("Product",productSchema);

app.get("/products",async(req,res)=>{
    const data =await Product.find();
    
    res.json({msg:"products fetch successfully"},data);
})

app.post("/products",async(req,res)=>{
    const {name,price,isStock} = req.body;
    const product = new Product({
        name,price,isStock
    })
    await product.save();
    res.json({msg:"product save successfully"},product);
})

app.get("/products/:id",async(req,res)=>{
    const id = req.params.id;
    const pro =await Product.find({id:id});
    res.json({msg:"user fetch successfully"},pro);
})

app.put("/products/:id",async(req,res)=>{
    const id = req.params.id;
})

app.delete("/products/:id",async(req,res)=>{
    const id = req.params.id;
    const del =await Product.delete({id});
    res.json({message:"product delete successfully",del});
})


app.listen(5000,()=>{
    console.log("Server started");
})