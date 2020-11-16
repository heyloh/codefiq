const Course = require('../models/Course');

module.exports = {
  /* The following method is used for listing all courses registered */
  async index(request, response) {
    const courses = await Course.findAll();
    return response.json(courses);
  },

  /* The following method is used for creating a new course */
  async store(request, response, next) {
    const { name } = request.body;
    
    /* Inserting the new Course on the database */
    try {
      const course = await Course.create({ name });

      /* Returning successfully */
      return response.status(201).json(course);

    } catch (e){
      /* Testing for errors in course creation  */
      const err = new Error(e);
      response.status(409).json({err});
      return next(err);
    }
  }
};