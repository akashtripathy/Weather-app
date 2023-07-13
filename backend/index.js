const express = require('express');
// const connectDB = require('./config/db');

const app = express();

//Connect DB
// connectDB();

const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

//Init Middleware
app.use(express.json({extended: false}));



app.get('/',(req,res)=> {console.log("API is working..."); res.send("OK")});


//Define route
app.use('/api/weather',require('./routes/api/weather'));

app.listen(PORT,()=> console.log(`listening at port ${PORT}`));