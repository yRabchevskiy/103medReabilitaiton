"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const visitSchema_1 = require("./visitSchema");
const Schema = mongoose.Schema;
const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    rank: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    visits: {
        type: Array,
        default: [visitSchema_1.default]
    },
    birthday: {
        type: Date,
        default: Date.now,
        validate: {
            validator: function (params) {
                return new Date(params);
            },
            message: 'Incorrect birthday'
        }
    },
    email: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Famele'],
        required: false,
        default: 'Male'
    },
});
exports.default = mongoose.model('patients', schema);
