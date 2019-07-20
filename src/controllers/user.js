const User = require('../models/user');
const Company = require('../models/company');
const Employee = require('../models/employee');
const { generateToken } = require('../utils/jwt');

async function addCompanyUser(req, res) {
  const {
    username,
    password,
    role,
    email,
    address,
    contactNumber,
    companyName,
    companyCode,
    companyDescription,
    abn
  } = req.body;

  const existingUser = await User.findOne({ username }).exec();
  if (existingUser) {
    return res.status(400).json("User already exist");
  }
  const findedCompany = await Company.findById(companyCode).exec();
  if (findedCompany) {
    return res.status(400).json("Company already exist");
  }

  const newCompany = new Company({
    code: companyCode,
    name: companyName,
    email,
    address,
    number: contactNumber,
    description: companyDescription,
    abn,
    employees: []
  });
  const user = new User({
    username,
    password,
    role,
    company: companyCode
  });

  await user.hashPassword();
  await user.save();
  await newCompany.save();
  const token = generateToken(user._id);
  const id = newCompany._id;
  return res.json({ id, username, role, token });
}

async function addIndividualUser(req, res) {
  const {
    username,
    password,
    role,
    email,
    address,
    contactNumber,
    firstName,
    lastName,
    jobTitle,
    tfn,
    status
  } = req.body;

  const existingUser = await User.findOne({ username }).exec();
  if (existingUser) {
    return res.status(400).json("User already exist");
  }
  const companyCode = username.slice(0, 3);
  const findedCompany = await Company.findById(companyCode).exec();
  if (!findedCompany) {
    return res.status(400).json("Company didn't exist");
  }

  const newEmployee = new Employee({
    firstName,
    lastName,
    jobTitle,
    email,
    contactNumber,
    address,
    status,
    tfn,
    company: companyCode
  });
  findedCompany.employees.addToSet(newEmployee._id);

  const user = new User({
    username,
    password,
    role,
    employee: newEmployee._id
  });
  console.log(newEmployee._id);
  await user.hashPassword();
  await user.save();
  await newEmployee.save();
  await findedCompany.save();
  const token = generateToken(user._id);
  const id = newEmployee._id;
  return res.json({ id, username, role, token });
}

module.exports = {
  addCompanyUser,
  addIndividualUser
};
