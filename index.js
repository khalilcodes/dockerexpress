const express = require('express');
const app  = express();

const port = process.env.PORT || 80;

app.use(express.static('Views'));

app.listen(port, ()=> {
    console.log("server started");
})