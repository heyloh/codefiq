const express = require('express');

const UserController = require('./controllers/UserController');

const routes = express.Router();

/* Route for listing users */
routes.get('/users', UserController.index);
/* Route for creating a new user */
routes.post('/users', UserController.store);

module.exports = routes;