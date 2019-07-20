const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const schema = new mongoose.Schema(
    {
        _id: {
            type: String,
            uppercase: true,
            alias: 'code'
        },

        name: {
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

        address: {
            type: String
        },

        number: {
            type: Number
        },

        description: {
            type: String,
            default: ''
        },

        abn: {
            type: Number,
            required: true
        },

        employees: [
            { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }
        ],

        __v: { type: Number, select: false }

    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    });

const model = mongoose.model('Company', schema);

module.exports = model;