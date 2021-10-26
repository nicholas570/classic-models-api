import { NextFunction, Request, Response, Router } from 'express';
import { EmptySearchException } from '../exceptions/EmptySearchException';
import { BaseController } from '../interfaces/Controller';
import { EmployeeService } from '../services/EmployeeService';

export class AuthController implements BaseController {
  path = '/auth';
  router = Router();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get(`${this.path}/:email`, this.authenticate);
  }

  async authenticate(req: Request, res: Response, next: NextFunction): Promise<Response<any> | undefined> {
    try {
      const employeeService = new EmployeeService();
      const result = await employeeService.getOneByEmail(req.params.email);
      if (result) {
        return res.status(200).json(result);
      } else {
        throw new EmptySearchException(`employees ${Object.entries(req.query).length ? 'with these filters' : ''}`);
      }
    } catch (error) {
      next(error);
    }
  }
}
