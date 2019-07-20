const express = require('express');
const companyRoute = require('./routes/company');
const employeeRoute = require('./routes/employee');
const router = express.Router();
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const authGuard = require('./middleware/authGuard');

const testRoute = require('./routes/test'); // test authGuard

router.use('/users', userRoute);
router.use('/auth', authRoute);

router.use('/test', authGuard, testRoute); // test authGuard

router.use('/companies', companyRoute);
router.use('/employees', employeeRoute);


module.exports = router;