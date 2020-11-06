const User = require('../models/User');

const { hash } = require('bcryptjs');

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
    const user = await User.create({ username, email, password});

    /* For blocking the response from showing the password*/
    const json_user = user.toJSON();
    delete json_user.password_hash;

    /* Returning successfully */
    return response.status(201).json(json_user);
  }
};