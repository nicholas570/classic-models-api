import { Router } from 'express';
import Controller from '../interfaces/Controller';
import TestController from './TestController';

class MainController implements Controller {
  public path = '/api';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    const testController = new TestController();
    this.router.use(`${this.path}`, testController.router);
  }
}

export default MainController;
