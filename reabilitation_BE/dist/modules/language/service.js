"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const language_schema_1 = require("./language_schema");
class LanguageService {
    getLanguages(callback) {
        language_schema_1.default.find(callback);
    }
    getLanguageById(query, callback) {
        language_schema_1.default.findOne(query, callback);
    }
    addLanguage(data, callback) {
        const _session = new language_schema_1.default(data);
        _session.save(callback);
    }
}
exports.default = LanguageService;
