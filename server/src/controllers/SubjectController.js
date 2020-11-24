const Subject = require('../models/Subject');

module.exports = {
  /* The following method is used for listing all subjects registered */
  async index(request, response) {
    const subjects = await Subject.findAll();
    return response.json(subjects);
  },

  /* The following method is used for creating a new subject */
  async store(request, response, next) {
    const { name, course_id } = request.body;
    
    /* Inserting the new subject on the database */
    try {
      const subject = await Subject.create({ name, course_id });

      /* Returning successfully */
      return response.status(201).json(subject);

    } catch (e){
      /* Testing for errors in subject creation  */
      const err = new Error(e);
      response.status(409).json({err});
      return next(err);
    }
  }
};