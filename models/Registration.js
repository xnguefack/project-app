const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    fname: {
        type: String,
        trim: true,
    },
    lname: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        trim: true,
    },
    birthday: {
        type: String,
        trim: true,
    },
    sin: {
        type: Number,
        trim: true,
    },
    healthC: {
        type: Number,
        trim: true,
    },
    physician: {
        type: String,
        trim: true,
    },
    phone: {
        type: Number,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    address: {
        type: String,
        trim: true,
    },
    city: {
        type: String,
        trim: true,
    },
    province: {
        type: String,
        trim: true,
    },
    vstatus: {
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model('Registration', registrationSchema);