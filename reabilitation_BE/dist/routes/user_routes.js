"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const userController_1 = require("./../controller/userController");
class UserRoutes {
    constructor() {
        this.user_controller = new userController_1.UserController();
    }
    route(app) {
        app.post('/api/user', (req, res) => {
            this.user_controller.create_user(req, res);
        });
        app.get('/api/users', (req, res) => {
            this.user_controller.get_users(req, res);
        });
        app.get('/api/user/:id', (req, res) => {
            this.user_controller.get_user(req, res);
        });
        app.put('/api/user/:id', (req, res) => {
            this.user_controller.update_user(req, res);
        });
        app.delete('/api/user/:id', (req, res) => {
            this.user_controller.delete_user(req, res);
        });
        app.post('/api/login', (req, res) => {
            this.user_controller.login(req, res);
        });
        app.post('/api/logout', (req, res) => {
            this.user_controller.logout(req, res);
        });
    }
}
exports.UserRoutes = UserRoutes;
