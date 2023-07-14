const mongoose=require('mongoose');
const LibSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide an name'],
        
    },
    author:{
        type:String
    },
    completed:{
        type:String,
        enum:{
            values:['completed','not-started','reading'],
            
        }
    },
    genre:{
        type:String,
        
    },
    image:{
        type:String,
    },
    content:{
        type:String,
    },
   
})
module.exports=mongoose.model('Lib',LibSchema);