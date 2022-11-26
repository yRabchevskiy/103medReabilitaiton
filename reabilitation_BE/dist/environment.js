"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Environments;
(function (Environments) {
    Environments["local_environment"] = "local";
    Environments["dev_environment"] = "dev";
    Environments["prod_environment"] = "prod";
    Environments["qa_environment"] = "qa";
})(Environments || (Environments = {}));
class Environment {
    constructor(environment) {
        this.environment = environment;
    }
    getPort() {
        if (this.environment === Environments.prod_environment) {
            return 8081;
        }
        else if (this.environment === Environments.dev_environment) {
            return 8082;
        }
        else if (this.environment === Environments.qa_environment) {
            return 8083;
        }
        else {
            return 8080;
        }
    }
    getDBName() {
        if (this.environment === Environments.prod_environment) {
            return 'languages';
        }
        else if (this.environment === Environments.dev_environment) {
            return 'languages';
        }
        else if (this.environment === Environments.qa_environment) {
            return 'languages';
        }
        else {
            return 'languages';
        }
    }
}
exports.default = new Environment(Environments.local_environment);
