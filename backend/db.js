const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const mongoUrl = process.env.DB_URI

const connectToMongo = ()=>{
    mongoose.connect(mongoUrl)
    .then(()=>{
        console.log("Db Connected!");
    })
    .catch((e)=>{
        console.log(e);
    })
}
module.exports  = connectToMongo;