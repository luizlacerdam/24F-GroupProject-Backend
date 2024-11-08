/* eslint-disable complexity */
require('dotenv/config');
const userModel = require('../database/models/user');
const { tokenGenerator } = require('../utils/tokenRelated');
const { hashMd5Compare } = require('../utils/md5');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Some required fields are missing.' });
    }
    
    const user = await userModel.find({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found.' }); 
    }

    if (!hashMd5Compare(password, user.password)) {
      return res.status(422).json({ message: 'Password is incorrect.' });
    }
    const { _id, username, role } = user;
    const token = tokenGenerator({ data: { _id, username, role, email } });

    return res.status(200).json({ token, user: { _id, username, role, email } });
  } catch (err) {
    next(err);
  }
};

module.exports = {
    login,
};
