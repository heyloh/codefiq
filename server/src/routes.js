const express = require('express');

const UserController = require('./controllers/UserController');

const CourseController = require('./controllers/CourseController')
const routes = express.Router();

/* Route for listing users */
routes.get('/users', UserController.index);
/* Route for creating a new user */
routes.post('/users', UserController.store);
/* Route for listing courses */
routes.get('/courses', CourseController.allCourses);
/* Route for creating a new course */
routes.post('/courses', CourseController.store);

module.exports = routes;