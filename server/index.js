const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();


// API file for interacting with MongoDB
const api = require('../router/index');

// Parsers
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Angular DIST output folder
app.use(express.static(path.join(__dirname, '../client/dist')));

// API location
app.use('/', api);

// Send all other requests to the Angular app
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/src/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

console.log(`Server is listening to port: ${port}`);
app.listen(port);