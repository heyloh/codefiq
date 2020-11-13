const Course = require('../models/Course');

module.exports = {
  async allCourses(request, response) {
    const courses = await Course.findAll();
    return response.json(courses);
  },
  async store(request, response, next) {
    const { name } = request.body;
    
    try {
      const course = await Course.create({ name });
      return response.status(201).json(course);

    } catch (e){
      const err = new Error(e);
      response.status(409).json({err});
      return next(err);
      
    }
  }
};