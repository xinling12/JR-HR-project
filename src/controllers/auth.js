const User = require('../models/user');
const Company = require('../models/company');
const Employee = require('../models/employee');
const { generateToken } = require('../utils/jwt');

async function loginUser(req, res) {
  const { username, password } = req.body;

  const existingUser = await User.findOne({ username }).exec();
  if (!existingUser) {
    return res.status(401).json('Invalid username or password');
  }
  const validPassword = await existingUser.validatePassword(password);
  if (!validPassword) {
    return res.status(401).json('Invalid username or password');
  }

  const role = existingUser.role;
  console.log(existingUser);
  let id;
  if (role === 'company') {
    id = existingUser.company;
    console.log(id);
  } else {
    id = existingUser.employee;
    console.log('get employee id');
    console.log(id);
  }
  const token = generateToken(existingUser._id);
  return res.json({ id, username, role, token });
}

module.exports = {
  loginUser
};