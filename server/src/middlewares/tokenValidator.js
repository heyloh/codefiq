const{ verify } = require('jsonwebtoken');

const { secret, options } = require('../config/jsonwebtoken');

export default function tokenValidator(req, res, next) {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not provided' });
  }

  token = token.substring(7); // 'Bearer '

  try {
    const decoded = verify(token, secret);
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  return next();
}
