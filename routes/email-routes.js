'use strict';

const express = require('express');
const {emailview} = require('../controllers/emailcontroller');

const router = express.Router();

router.get('/', emailview);

module.exports = {routes: router}

