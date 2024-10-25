const express = require('express');

const app = express(); // create express app 

// this will only handle GET requests to /user
app.get('/user/:userId/:name/:password', (req, res) => {
    console.log(req.params);
    res.send({
        "fistName": "John",
        "lastName": "Doe",
    })
})

//this will match all the HTTP methods API calls to /test
app.use('/test', (req, res) => {
    res.send("Hello World");
})

app.listen(7777, () => {
    console.log('Server is running on port 7777');
});