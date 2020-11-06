const { hash } = require('bcryptjs');

const User = require('../models/User');

module.exports = {
  async index(request, response) {
    const users = await User.findAll();
    return response.json(users);
  },

  async store(request, response) {
    const { username, email, password } = request.body;

    const hashedPassword = await hash(password, 8);

    const user = await User.create({ username, email, password_hash: hashedPassword });

    const json_user = user.toJSON();

    delete json_user.password_hash;

    return response.status(201).json(json_user);
  }
};