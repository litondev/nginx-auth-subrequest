const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // Unauthrized
    // res.json({
    //     "message" : "Unuthorized"
    // },401)

    // Authrized
    res.json({
        "message" : "Authorized"
    });
});

app.listen(3000,() => {
    console.log("Auth App Is Running in port 3000");
});