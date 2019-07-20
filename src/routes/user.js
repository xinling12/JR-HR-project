const express = require('express');
const { addCompanyUser, addIndividualUser } = require('../controllers/user');
const router = express.Router();

router.post('/companies', addCompanyUser);
router.post('/employees', addIndividualUser);

module.exports = router;