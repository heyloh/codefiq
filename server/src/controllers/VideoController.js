const Video = require('../models/Video');

module.exports = {
  /* The following method is used for listing all videos registered */
  async index(request, response) {
    const videos = await Video.findAll();
    return response.json(videos);
  },

  /* The following method is used for creating a new video */
  async store(request, response, next) {
    const { url, subject_id } = request.body;
    
    /* Inserting the new video on the database */
    try {
      const video = await Video.create({ url, subject_id });

      /* Returning successfully */
      return response.status(201).json(video);

    } catch (e){
      /* Testing for errors in video creation  */
      const err = new Error(e);
      response.status(409).json({err});
      return next(err);
    }
  }
};