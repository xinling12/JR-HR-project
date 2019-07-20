const Employee = require('../models/employee');
const Company = require('../models/company');

async function addEmployee(req, res) {
  const {
    firstName,
    lastName,
    jobTitle,
    contactNumber,
    email,
    address,
    status,
    tfn,
    companyCode
  } = req.body;

  const findedCompany = await Company.findById(companyCode).exec();
  if (!findedCompany) {
    return res.status(400).json("Company doesn't exist");
  }

  const employee = new Employee({
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
  findedCompany.employees.addToSet(employee._id);
  await employee.save();
  await findedCompany.save();
  return res.json(employee);
}

async function deleteEmployee(req, res) {
  const id = req.params;
  const employee = await Employee.findByIdAndDelete(id);
  if (!employee) {
    return res.status(404).json("Employee not found");
  }
  return res.sendStatus(200);
}

async function updateEmployee(req, res) {
  const { id } = req.params;
  const {
    firstName,
    lastName,
    jobTitle,
    email,
    contactNumber,
    address,
    status,
    tfn
  } = req.body;
  const newEmployee = await Employee.findByIdAndDelete(
    id,
    {
      firstName,
      lastName,
      jobTitle,
      email,
      contactNumber,
      address,
      status,
      tfn
    },
    {
      new: true
    }
  );
  if (!newEmployee) {
    return res.status(404).json("Employee not found");
  }
  return res.json(newCompany);
}

async function getEmployee(req, res) {
  const id = req.params;

  const employee = await Employee.findById(id);

  if (!employee) {
    return res.status(404).json("Employee not found");
  }
  return res.json(employee);
}

async function getAllEmployee(req, res) {
  const employee = await Employee.find().exec();
  return res.json(employee);
}

module.exports = {
  addEmployee,
  deleteEmployee,
  updateEmployee,
  getAllEmployee,
  getEmployee
};
