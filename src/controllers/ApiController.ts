import { Router } from 'express';
import Controller from '../interfaces/Controller';
import { OfficeController } from './OfficeController';

class MainController implements Controller {
  public path = '/api';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    const officeController = new OfficeController();
    this.router.use(`${this.path}`, officeController.router);
  }
}

export default MainController;
