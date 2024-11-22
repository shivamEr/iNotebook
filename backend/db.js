const mongoose = require('mongoose');

const mongoUrl = "mongodb://localhost:27017/";

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