require('./db/connect');
const express=require('express');
const app=express();
const lib=require('./routes/Lib');
//const notFound=require('./middleware/notfound');
const connectDB=require('./db/connect');
const errorHandlerMiddleware=require('./middleware/error');
const port=process.env.PORT||3000;
require('dotenv').config();
app.use(express.json());

app.use(errorHandlerMiddleware);
app.use('/api/v1/lib',lib);
const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port,console.log('Server is listening'));
    }
    catch(error){
    console.log(error);
    }
}
start();
console.log(port);