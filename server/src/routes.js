const express = require('express');

const UserController = require('./controllers/UserController');

const CourseController = require('./controllers/CourseController');

const SubjectController = require('./controllers/SubjectController');

const VideoController = require('./controllers/VideoController');

const ExerciseController = require('./controllers/ExerciseController');

const ProgressController = require('./controllers/ProgressController');

const TokenValidator = require('./middlewares/tokenValidator');

const routes = express.Router();

/* Route for listing users */
routes.get('/users', UserController.index);
/* Route for creating a new user */
routes.post('/users', UserController.store);
/* Route for signing in as a user */
routes.get('/sign-in', UserController.show);
/* Temporary route for validate the token */
routes.get('/test', TokenValidator, async (request, response) => {
  return response.json({});
});
/* Route for listing courses */
routes.get('/courses', CourseController.index);
/* Route for creating a new course */
routes.post('/courses', CourseController.store);
/* Route for listing subjects */
routes.get('/subjects', SubjectController.index);
/* Route for creating a new subject */
routes.post('/subjects', SubjectController.store);
/* Route for listing videos */
routes.get('/videos', SubjectController.index);
/* Route for creating a new video */
routes.post('/videos', SubjectController.store);
/* Route for listing exercises */
routes.get('/exercises', SubjectController.index);
/* Route for creating a new exercise */
routes.post('/exercises', SubjectController.store);
/* Route for listing progress */
routes.get('/progress', ProgressController.index);
/* Route for creating a new progress */
routes.post('/progress', ProgressController.store);
/* Route for update a progress */
routes.put('/progress', ProgressController.update);
module.exports = routes;