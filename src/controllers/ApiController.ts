import { Router } from 'express';
import { BaseController } from '../interfaces/Controller';
import { AuthController } from './AuthController';
import { EmployeeController } from './EmployeeController';
import { OfficeController } from './OfficeController';

class MainController implements BaseController {
  path = '/api';
  router = Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes(): void {
    const officeController = new OfficeController();
    const employeeController = new EmployeeController();
    const authController = new AuthController();

    this.router.use(`${this.path}`, officeController.router);
    this.router.use(`${this.path}`, employeeController.router);
    this.router.use(`${this.path}`, authController.router);
  }
}

export default MainController;
