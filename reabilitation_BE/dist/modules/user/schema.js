"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema({
    name: {
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        }
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
    email: String,
    phone: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Famele'],
        default: 'Male'
    },
    permision: {
        type: String,
        required: true,
        enum: ['Admin', 'Staff', 'Doctor'],
        default: 'Staff'
    },
    is_deleted: {
        type: Boolean,
        default: false
    },
    authData: {
        login: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
    }
});
exports.default = mongoose.model('users', schema);
