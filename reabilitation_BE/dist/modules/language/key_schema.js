"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const key_schema = new Schema({
    name: String,
});
exports.default = mongoose.model('keys', key_schema);
