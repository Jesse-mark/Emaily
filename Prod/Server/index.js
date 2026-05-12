const express = require('express');
require('dotenv').config();
const passportConfig = require('./services/passport');
const authRoutes = require('./routes/authRoutes');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();
mongoose.connect(keys.mongoURI);
mongoose.connection.on('connected', () => {
    console.log('MongoDB connected')
})

authRoutes(app);

app.get('/', (req, res) => {
res.send({Hi: "Jesse!", bye: "Mark!"})   
});

const PORT = process.env.PORT  || 5000;
app.listen(PORT, ()=> {
    console.log(`server running on port ${PORT}`)
});