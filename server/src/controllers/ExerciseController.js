const Exercise = require('../models/Exercise');

module.exports = {
  /* The following method is used for listing all exercises registered */
  async index(request, response) {
    const exercises = await Exercise.findAll();
    return response.json(exercises);
  },

  /* The following method is used for creating a new exercise */
  async store(request, response, next) {
    const { content, subject_id } = request.body;
    
    /* Inserting the new exercise on the database */
    try {
      const exercise = await Exercise.create({ content, subject_id });

      /* Returning successfully */
      return response.status(201).json(exercise);

    } catch (e){
      /* Testing for errors in exercise creation  */
      const err = new Error(e);
      response.status(409).json({err});
      return next(err);
    }
  }
};