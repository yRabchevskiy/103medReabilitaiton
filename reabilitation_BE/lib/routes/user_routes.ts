import { UserController } from './../controller/userController';
import { Application, Request, Response } from 'express';

export class UserRoutes {

  private user_controller: UserController = new UserController();

  public route(app: Application) {

    app.post('/api/user', (req: Request, res: Response) => {
      this.user_controller.create_user(req, res);
    });

    app.get('/api/users', (req: Request, res: Response) => {
      this.user_controller.get_users(req, res);
    });

    app.get('/api/user/:id', (req: Request, res: Response) => {
      this.user_controller.get_user(req, res);
    });

    app.put('/api/user/:id', (req: Request, res: Response) => {
      this.user_controller.update_user(req, res);
    });

    app.delete('/api/user/:id', (req: Request, res: Response) => {
      this.user_controller.delete_user(req, res);
    });

    app.post('/api/login', (req: Request, res: Response) => {
      this.user_controller.login(req, res);
    });

    app.post('/api/logout', (req: Request, res: Response) => {
      this.user_controller.logout(req, res);
    });

  }
}