const User = require('../models/User');

module.exports = {
  async index(request, response) {
    const users = await User.findAll();
    return response.json(users);
  },

  async store(request, response) {
    const { username, email, password } = request.body;

    const user = await User.create({ username, email, password_hash: password });

    return response.json(user);
  }
};