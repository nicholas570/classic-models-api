import { Router } from 'express';
import { BaseController } from '../interfaces/Controller';
import { OfficeController } from './OfficeController';

class MainController implements BaseController {
  path = '/api';
  router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    const officeController = new OfficeController();
    this.router.use(`${this.path}`, officeController.router);
    this.router.use(`${this.path}`, officeController.router);
  }
}

export default MainController;
