const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const conversationRoute = require('./routes/conversations');
const messageRoute = require('./routes/messages')
const cors = require('cors');
const path = require('path')
//const request = require('request')

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser:true},()=>{
    console.log('Connected to MongoDB')
})
//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use(cors());

//Serve static asssets if in production

if (process.env.NODE_ENV === 'production'){
    // set static folder
app.use(express.static('client/build'))    

app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(8800,()=> {
    console.log('Backend server is running!')
})
