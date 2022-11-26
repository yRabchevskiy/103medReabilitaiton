"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const language_schema = new Schema({
    name: String,
    title: String,
    description: String,
    isDefault: Boolean,
});
exports.default = mongoose.model('languages', language_schema);
