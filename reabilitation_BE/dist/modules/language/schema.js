"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const LanguageKeysNote = {
    key: String,
    value: String,
    languageId: String
};
const schema = new Schema({
    keys: [LanguageKeysNote],
    name: String,
    title: String,
    description: String,
    isDefault: Boolean,
});
exports.default = mongoose.model('languages', schema);
