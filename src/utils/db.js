const mongoose = require('mongoose');

exports.connectToDB = () => {
  const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD,NODE_ENV } = process.env;
  // mongoose.set('debug', true);

  let {DB_DATABASE} = process.env;
  if(NODE_ENV==='test'){
    DB_DATABASE += '_test';
  }
  
  let connectionString;
  if(DB_USER,DB_PASSWORD){
    connectionString = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}`;
  } else {
    connectionString = `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;
  }

  console.log(`Connecting to ${connectionString}`);
  mongoose.set('useFindAndModify', false);
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true
  });
};