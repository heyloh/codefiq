const { verify } = require('jsonwebtoken');

const { secret } = require('../config/jsonwebtoken');

module.exports = function tokenValidator(req, res, next) {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(400).json({ message: 'Token not provided' });
  }

  try {
    const decoded = verify(token, secret);
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  return next();
}
