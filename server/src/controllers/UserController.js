const User = require('../models/User');

const { sign } = require('jsonwebtoken');

const { secret, options } = require('../config/jsonwebtoken');

module.exports = {
  /* The following method is used for listing all users registered */
  async index(request, response) {
    const users = await User.findAll();
    return response.json(users);
  },

  /* The following method is used for sign in */
  async show(request, response) {
    const {email, password} = request.body;

    try {
      const user = await User.findOne({ email });

      if (!user.checkPassword(password))
        return response.status(403).json({ error: 'Wrong email or password' });
      
      const token = sign({id: user.id}, secret, options);

      return response.json({email, token});
    } catch (e){
      /* Testing for errors in token generation  */
      const {message : error} = e;
      return response.status(409).json({error});
    }
  },

  /* The following method is used for creating a new user */
  async store(request, response) {
    /* Getting user data from the request */
    const { username, email, password } = request.body;

    /* Inserting the new User on the database */
    try {
      const user = await User.create({ username, email, password});
      /* For blocking the response from showing the password*/
      const json_user = user.get({ plain: true });
      delete user.password_hash;

      /* Returning successfully */
      return response.status(201).json(json_user);
      
    } catch (e){
      /* Testing for errors in user creation  */
      const {message : error} = e;
      return response.status(409).json({error});
    }
  }
};