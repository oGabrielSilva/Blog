const express = require('express');
const route = express.Router();
const home = require('../controllers/home')

route.get('/', home.index);

module.exports = route;
