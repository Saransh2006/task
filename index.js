const express = require('express');
const mongoose = require('mongoose');
const BookModel = require("./schema");
require ("dotenv").config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;


mongoose.connect(MONGO_URL)
.then(()=>{
    console.log("MongoDB Connected")
})
.catch(err=>console.log(err));


// Route for creating creating one book
app.post("/books" , async (req , res)=>{
    try { 
           const book =  await BookModel.create(req.body);
           res.status(201).json(book);
    } catch(err){
            res.status(400).json({message : err.message});
    }
})

//Route for fetching record of all books
app.get("/books" , async (req , res)=>{
    try { 
           const student =  await BookModel.find(req.params.category);
           res.status(201).json(student);
    } catch(err){
            res.status(400).json({message : err.message});
    }
})

// Route for fetching one book with his id 
app.get("/books/:id" , async (req , res)=>{
    try { 
           const book =  await BookModel.findById(req.params.id);
           res.json(book);
    } catch(err){
            res.status(404).json({message : err.message});
    }
})


//route for deleting one student record
app.delete("/books/:id" , async (req , res)=>{
    try { 
           const books =  await BookModel.findByIdAndDelete(req.params.id);
           res.json(books);
    } catch(err){
            res.status(400).json({message : err.message});
    }
})

//
app.put("/books/:id" , async (req , res)=>{
    try { 
           const books =  await BookModel.findByIdAndUpdate(req.params.id , req.body , 
            {
            new:true ,
            runValidators:true
        }
    );
           res.json(books);
    } catch(err){
            res.status(400).json({message : err.message});
    }
})




app.listen(PORT, ()=>{
    console.log("Server Started at " + PORT);
})