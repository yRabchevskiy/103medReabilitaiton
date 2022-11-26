import { Application, Request, Response } from 'express';
import { LanguageController } from './../controller/languageController';

export class LanguageRoutes {

  private language_controller: LanguageController = new LanguageController();

  public route(app: Application) {

    app.get('/api/languages', (req: Request, res: Response) => {
      this.language_controller.get_languages(req, res);
    });

    app.get('/api/language/:id', (req: Request, res: Response) => {
      this.language_controller.get_language_by_id(req, res);
    });

    app.post('/api/language', (req: Request, res: Response) => {
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