"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageRoutes = void 0;
const languageController_1 = require("./../controller/languageController");
class LanguageRoutes {
    constructor() {
        this.language_controller = new languageController_1.LanguageController();
    }
    route(app) {
        app.get('/api/languages', (req, res) => {
            this.language_controller.get_languages(req, res);
        });
        app.get('/api/language/:id', (req, res) => {
            this.language_controller.get_language_by_id(req, res);
        });
        app.post('/api/language', (req, res) => {
            this.language_controller.add_language(req, res);
        });
        // app.put('/api/user/:id', (req: Request, res: Response) => {
        //   this.user_controller.update_user(req, res);
        // });
        // app.delete('/api/user/:id', (req: Request, res: Response) => {
        //   this.user_controller.delete_user(req, res);
        // });
    }
}
exports.LanguageRoutes = LanguageRoutes;
