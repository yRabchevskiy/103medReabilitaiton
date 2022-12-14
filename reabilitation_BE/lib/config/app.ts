import { CommonRoutes } from './../routes/common_routes';
import { UserRoutes } from './../routes/user_routes';
import { PatientRoutes } from './../routes/patient_route';
import * as express from "express";
import * as bodyParser from "body-parser";
import env from '../environment';
import mongoose from 'mongoose';
import cors = require('cors');

class App {
  public app: express.Application;
  public mongoUrl: string = 'mongodb://localhost:27017/' + env.getDBName();

  private common_routes: CommonRoutes = new CommonRoutes();
  private user_routes: UserRoutes = new UserRoutes();
  private patient_routes: PatientRoutes = new PatientRoutes();
  constructor() {
    this.app = express();
    this.config();
    this.mongoSetup();
    this.user_routes.route(this.app);
    this.patient_routes.route(this.app);
    // should be the last
    this.common_routes.route(this.app);
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
    //cors
    this.app.use(cors());

  }

  private mongoSetup() {
    mongoose.connect(this.mongoUrl);
  }
}
export default new App().app;