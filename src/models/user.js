const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  company: {
    type: String,
    ref: 'Employee'
  },
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company'
  }
});

userSchema.methods.hashPassword = async function () {
  this.password = await bcrypt.hash(this.password, 10);
  // console.log(this.password);
};

userSchema.methods.validatePassword = async function (password) {
  const validPassword = await bcrypt.compare(password, this.password);
  return validPassword;
};

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;