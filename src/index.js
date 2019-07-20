require('dotenv').config();
require('express-async-errors');
const express = require('express');

const routes = require('./routes');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const {connectToDB} = require('./utils/db');
const errorHandler = require('./middleware/errorHandler');


const PORT = process.env.PORT || 3000;
const app = express();

app.use(helmet());
//app.use(morganLog);
app.use(cors());
app.use(express.json());

app.use('/api', routes);
app.use(errorHandler);

connectToDB().then(()=>{
  app.listen(PORT, () => {
    console.log(`server listen on port ${PORT}`);
  });
}).catch(e=>{
  console.error(e.message);
  process.exit(1);
}); 