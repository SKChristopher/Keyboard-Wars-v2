const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./models/database');
const userController = require('./controllers/userController.js');

const PORT = 3000;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => res.sendFile('index.html'));

app.post('/signup', userController.newUser);
app.post('/login', userController.verifyUser);

app.listen(PORT, console.log('listening on...', PORT));