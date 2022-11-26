"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_routes_1 = require("./../routes/common_routes");
const user_routes_1 = require("./../routes/user_routes");
const express = require("express");
const bodyParser = require("body-parser");
const environment_1 = require("../environment");
const mongoose_1 = require("mongoose");
const cors = require("cors");
const language_routes_1 = require("./../routes/language_routes");
class App {
    constructor() {
        this.mongoUrl = 'mongodb://localhost:27017/' + environment_1.default.getDBName();
        this.common_routes = new common_routes_1.CommonRoutes();
        this.language_routes = new language_routes_1.LanguageRoutes();
        this.user_routes = new user_routes_1.UserRoutes();
        this.app = express();
        this.config();
        this.mongoSetup();
        this.user_routes.route(this.app);
        this.language_routes.route(this.app);
        // should be the last
        this.common_routes.route(this.app);
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        //cors
        this.app.use(cors());
    }
    mongoSetup() {
        mongoose_1.default.connect(this.mongoUrl);
    }
}
exports.default = new App().app;
