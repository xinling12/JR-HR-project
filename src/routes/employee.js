const express = require('express');

const{
    addEmployee,
    deleteEmployee,
    updateEmployee,
    getAllEmployee,
    getEmployee
} = require('../controllers/employee');

const router = express.Router();

router.post('/', addEmployee);
router.delete('/:id',deleteEmployee);
router.put('/:id',updateEmployee);
router.get('/', getAllEmployee);
router.get('/:id',getEmployee);

module.exports = router;
