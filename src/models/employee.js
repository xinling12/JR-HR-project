const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const schema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },

    jobTitle: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        validate: {
            validator: email => !Joi.validate(email, Joi.string().email()).error,
            msg: 'Invalid email format'
        }
    },

    contactNumber: {
        type: Number
    },

    address: {
        type: String,
        required: true
    },

    status: {
        type: String,
        required: true
    },

    tfn: {
        type: Number,
        required: true
    },

    company: {
        type: String,
        ref: 'Company',
        required: true
    }

});

const model = mongoose.model('Employee', schema);

module.exports = model;