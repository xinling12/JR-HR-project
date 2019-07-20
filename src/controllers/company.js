const Company = require('../models/company');

async function addCompany(req, res) {
  const {
    companyCode,
    companyName,
    email,
    address,
    contactNumber,
    companyDescription,
    abn
  } = req.body;

  const existingCompany = await Company.findById(companyCode).exec();
  if (existingCompany) {
    return res.status(400).json("Duplicate company code");
  }
  const company = new Company({
    code: companyCode,
    name: companyName,
    email,
    address,
    number: contactNumber,
    description: companyDescription,
    abn,
    employees: []
  });

  await company.save();
  return res.json(company);
}

async function deleteCompany(req, res) {
  const { id: code } = req.params;
  const company = await Company.findByIdAndDelete(code);
  if (!company) {
    return res.status(404).json("Company not found");
  }
  return res.sendStatus(200);
}

async function updateCompany(req, res) {
  const { id: code } = req.params;
  const { email, address, number, description } = req.body;
  const newCompany = await Company.findByIdAndDelete(
    code,
    { email, address, number, description },
    {
      new: true
    }
  );
  if (!newCompany) {
    return res.status(404).json("Company not found");
  }
  return res.json(newCompany);
}

async function getCompany(req, res) {
  const { id: code } = req.params;

  const company = await Company.findById(code);

  if (!company) {
    return res.status(404).json("Company not found");
  }
  return res.json(company);
}

async function getAllCompany(req, res) {
  const company = await Company.find().exec();
  return res.json(company);
}

module.exports = {
  addCompany,
  deleteCompany,
  updateCompany,
  getAllCompany,
  getCompany
};
