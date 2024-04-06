
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const {randomBytes} = require('crypto');
const cors = require('cors');

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

//routes
app.use(require('./Routes/index'));

app.listen(4000, () => {
    console.log('listening on 4000');
});