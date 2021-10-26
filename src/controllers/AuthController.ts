import { NextFunction, Request, Response, Router } from 'express';
import bcrypt from 'bcrypt';
import { EmptySearchException } from '../exceptions/EmptySearchException';
import { BaseController } from '../interfaces/Controller';
import { EmployeeService } from '../services/EmployeeService';
import { EntityNotFoundException } from '../exceptions/NotFoundException';

export class AuthController implements BaseController {
  path = '/auth';
  router = Router();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(`${this.path}`, this.authenticate);
  }

  static async verifyPassword(password: string, hash: string): Promise<boolean> {
    try {
      console.log(password, hash);

      const compared = await bcrypt.compare(password, hash);
      return compared;
    } catch (error) {
      throw error;
    }
  }

  async authenticate(req: Request, res: Response, next: NextFunction): Promise<Response<any> | undefined> {
    try {
      const employeeService = new EmployeeService();
      const result = await employeeService.getOneByEmail(req.body.email);
      if (result) {
        const isValidCredentials = await AuthController.verifyPassword(req.body.password, result.password);
        console.log(('b' + 'a' + +'a' + 'a').toLowerCase());

        // TODO: should return the token
        return res.status(200).json({ isAuthenticated: isValidCredentials });
      } else {
        throw new EntityNotFoundException(req.body.email, 'Employee');
      }
    } catch (error) {
      next(error);
    }
  }
}
