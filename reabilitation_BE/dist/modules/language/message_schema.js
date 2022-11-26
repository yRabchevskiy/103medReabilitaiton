"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// export interface IMessage {
//   keyId: String;  // IKey _id
//   languageId: String; // ILanguage _id
//   value: String;
// }
const message_schema = new Schema({
    keyId: String,
    languageId: String,
    value: String,
    isDefault: Boolean,
});
exports.default = mongoose.model('messages', message_schema);
