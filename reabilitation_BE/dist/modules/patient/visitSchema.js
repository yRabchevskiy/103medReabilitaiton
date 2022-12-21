"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema({
    patientId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        validate: {
            validator: function (params) {
                return new Date(params);
            },
            message: 'Incorrect birthday'
        }
    },
    diagnosis: {
        type: String,
        required: true
    },
    treatment: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
});
exports.default = mongoose.model('visits', schema);
