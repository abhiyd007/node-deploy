require('dotenv').config();
const mongoose = require('mongoose');
const express = require("express");
const server = express();
const cors = require('cors');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');


//DB connection
main().catch(err => console.log(err));
async function main(){
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB connected")
}



//bodyparser
server.use(cors());
server.use(express.json());
// server.use(express.urlencoded());
server.use(express.static(process.env.PUBLIC_DIR));
server.use('/products',productRouter.router);
server.use('/users',userRouter.router);
server.use('*',(req,res)=>{
    res.sendFile(__dirname+'/build/index.html')
})


server.listen(process.env.PORT,()=>{
    console.log('server started');
});
