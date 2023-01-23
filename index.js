'use strict';

const express = require('express');
const config = require('./config');
const ejs = require('express-ejs')
const expresslayouts = require('express-ejs-layouts');
const path = require('path');
const cors = require('cors');
const emailRoutes = require('./routes/email-routes');

const app = express();

app.use(expresslayouts);
app.set('view engine', 'ejs')
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(emailRoutes.routes);

app.listen(config.port, ()=>{console.log('App listening on port ' + config.port);});

