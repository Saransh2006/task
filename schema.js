const mongoose = require("mongoose");

//Creating Schema  // Schema is class here in mongoose lib
const bookSchema  = new mongoose.Schema({
    title:{
        type:String, 
        required:true,
        min:3
    } , 
    author:{
        type:String,
        required:true
    } , 
    price:{
        type:Number, 
        min:0
    } , 
     category: {
         type: String,
         enum: ["Fiction", "Non-Fiction"]
     }, 

    inStock : {
        type:Boolean , 
        default :true
    } 

}  , {
    timestamps:true
} );       

//creating model : Student -> that will be used to contact or talk with db , which is following "studentSchema" schema 
module.exports = mongoose.model("BookModel" , bookSchema);