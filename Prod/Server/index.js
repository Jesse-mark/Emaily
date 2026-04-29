const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.send({Hi: "Jesse!", bye: "Mark!"})   
});

const PORT = process.env.PORT  || 5000;
app.listen(PORT, ()=> {
    console.log(`server running on port ${PORT}`)
});