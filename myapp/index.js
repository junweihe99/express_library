//Include Express Library
const express = require('express');
const app = express();
const port = 3000;

//Responds to HTTP get requests
app.get('/', (req,res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});