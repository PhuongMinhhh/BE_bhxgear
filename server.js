const express = require('express');
const mongoose  = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config({path: '.env'})
const app = express();  
// Sử dụng middleware

const port = process.env.PORT ;
const url = process.env.MONGODB_URI;


// Connect to Mongodb
mongoose.connect(url).
then(()=>{console.log("Mongoose server has started")
})
.catch((err)=>{
    console.error(err)
})  
app.use(cors());

app.use(bodyParser.json());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the BHXGEAR API!');
});
// // Định nghĩa các route
app.use('/api', require('./routes/api'));
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});