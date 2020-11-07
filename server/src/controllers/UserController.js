const User = require('../models/User');

module.exports = {
  /* The following method is used for listing all users registered */
  async index(request, response) {
    const users = await User.findAll();
    return response.json(users);
  },

  /* The following method is used for creating a new user */
  async store(request, response) {
    /* Getting user data from the request */
    const { username, email, password } = request.body;

    /* Inserting the new User on the database */
    try {
      const user = await User.create({ username, email, password});
    } catch (e){
      /* Testing for errors in user creation  */
      const {message : error} = e;
      return response.status(409).json({error});
    }

    /* For blocking the response from showing the password*/
    const json_user = user.get({ plain: true });

    /* Returning successfully */
    return response.status(201).json(json_user);
  }
};