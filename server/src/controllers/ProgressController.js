const Progress = require('../models/Progress');

module.exports = {
  /* The following method is used for listing all progress registered */
  async index(request, response) {
    const progress = await Progress.findAll();
    return response.json(progress);
  },

  /* The following method is used for creating a new progress */
  async store(request, response, next) {
    const { progress, user_id, course_id } = request.body;

    /* Inserting the new progress on the database */
    try {
      const prog_result = await Progress.create({ progress, user_id, course_id });

      /* Returning successfully */
      return response.status(201).json(prog_result);

    } catch (e){
      /* Testing for errors in progress creation  */
      const err = new Error(e);
      response.status(409).json({err});
      return next(err);
    }
  },

  async update(request, response, next) {
    const { progress, user_id, course_id } = request.body;

    /* Inserting the new progress on the database */
    try {
      
      const prog_result = await Progress.update(
                    {progress: progress}, 
                    {where: {user_id: user_id, course_id: course_id}})
                    .then (function ([rowsUpdate, [updatedBook]]) { 
                      //res.json (updatedBook) 
                      return response.status(201).json(updatedBook);
                   });
      /* Returning successfully */
      

    } catch (e){
      /* Testing for errors in progress creation  */
      const err = new Error(e);
      response.status(409).json({err});
      return next(err);
    }
  }
}; 