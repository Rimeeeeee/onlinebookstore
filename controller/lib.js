const mongoose=require('mongoose');
const Lib=require('../models/Lib');
const asyncWrapper=require('../middleware/async');
const getAllBooks=asyncWrapper(async(req,res)=>{
    const books=await Lib.find({});
    res.status(200).json({books});
})
const getBook=asyncWrapper(async(req,res)=>{
    const{completed,author,name,genre}=req.query;
    const queryObject={};
    if(completed){
        queryObject.completed=completed;

    }
    if(author)
    queryObject.author=author;
    if(genre)
    queryObject.genre=genre;
    if(name)
    queryObject.name={$regex:name,$options:'i'};
    const books=await Lib.find(queryObject);
    if(!books)
    return res.status(404).json({msg:'Sorry no book with the given parameter available'});
    res.status(200).json({books});
})
const createBook=asyncWrapper(async(req,res)=>{
    const books=await Lib.create(req.body);
    res.status(200).json({books});
})
const deleteBook=asyncWrapper(async(req,res)=>{
    const{id:bookID}=req.params;
    const books=await Lib.findOneAndDelete({_id:bookID});
    if(!books)
    return res.status(404).json({msg:'No book with the given id:'+bookID});
    res.status(200).json({books});
})
const updateBook=asyncWrapper(async(req,res)=>{
    const {id:bookID}=req.params;
    const books=await Lib.findOneAndUpdate({_id:bookID},req.body,{new:true,runValidators:true});
    if(!books)
    return res.status(404).json({msg:'No book with the given id:'+bookID});
    res.status(200).json({books});

})
 
    module.exports={getBook,getAllBooks,createBook,updateBook,deleteBook};