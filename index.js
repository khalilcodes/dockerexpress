const express = require('express');
const app  = express();

const port = process.env.PORT || 7285;

app.use(express.static('Views'));

app.listen(port, ()=> {
    console.log("server started");
})