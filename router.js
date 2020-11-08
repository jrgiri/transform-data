const express = require('express');
const app = express();
const {transFormData} = require('./controller/transFormController');

app.get('/', (req, res) => {
    res.send("Welcome");
})

app.post('/transform', transFormData);

module.exports = app;