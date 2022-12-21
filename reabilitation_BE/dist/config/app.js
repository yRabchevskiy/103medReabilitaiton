"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_routes_1 = require("./../routes/common_routes");
const user_routes_1 = require("./../routes/user_routes");
const patient_route_1 = require("./../routes/patient_route");
const express = require("express");
const bodyParser = require("body-parser");
const environment_1 = require("../environment");
const mongoose_1 = require("mongoose");
const cors = require("cors");
class App {
    constructor() {
        this.mongoUrl = 'mongodb://localhost:27017/' + environment_1.default.getDBName();
        this.common_routes = new common_routes_1.CommonRoutes();
        this.user_routes = new user_routes_1.UserRoutes();
        this.patient_routes = new patient_route_1.PatientRoutes();
        this.app = express();
        this.config();
        this.mongoSetup();
        this.user_routes.route(this.app);
        this.patient_routes.route(this.app);
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
