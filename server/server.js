const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const path =require('path');

const app = express();

// db
mongoose
    .connect(process.env.DATABASE_CLOUD, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err));

// import routes
const authRoutes = require('./routes/auth');

// app middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
// app.use(cors());
app.use(cors({ origin: process.env.CLIENT_URL }));
if (process.env.NODE_ENV=='production'){
    app.use(express.static('client/build'));
    app.get('*',(req,res) =>{
     res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
    });

}
// middlewares
app.use('/api', authRoutes);


const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`API is running on port ${port}`));
