const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

/* Defining used models */
const User = require('../models/User');
const Course = require('../models/Course');
const Subject = require('../models/Subject');
const Video = require('../models/Video');
const Exercise = require('../models/Exercise');
const Progress = require('../models/Progress');

/* Setting up the connection */
const connection = new Sequelize(dbConfig);

/* Telling model to use the connection above */
User.init(connection);
Course.init(connection);
Subject.init(connection);
Video.init(connection);
Exercise.init(connection);
Progress.init(connection);

module.exports = connection;