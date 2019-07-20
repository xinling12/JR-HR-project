const express = require('express');

const {
    addCompany,
    deleteCompany,
    updateCompany,
    getAllCompany,
    getCompany,
    addEmployee
} = require('../controllers/company');

const router = express.Router();

router.post('/', addCompany);
router.delete('/:id', deleteCompany);
router.put('/:id', updateCompany);
router.get('/', getAllCompany);
router.get('/:id', getCompany);

module.exports = router;