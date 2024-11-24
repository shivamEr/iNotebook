
const express = require('express');
const connectToMongo = require('./db');
const app = express();

// connecting DB from db.js file
connectToMongo();

// it's used to parse the incoming request bodies in a middleware. like get req in json
app.use(express.json());
// Availble Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.get('/',(req, res)=>{
    res.send('Hello, Coders!')
})
app.listen(5000,()=>{
    console.log("server is running on port 5000");
})