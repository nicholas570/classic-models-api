import { NextFunction, Request, Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { BaseController } from '../interfaces/controller';
import { EmployeeService } from '../services/EmployeeService';
import { EntityNotFoundException } from '../exceptions/NotFoundException';
import { ApiResponse, AuthResponse, ResponseContent } from '../interfaces/apiResponse';
import { AuthService } from '../services/AuthService';

export class AuthController implements BaseController {
  path = '/auth';
  router = Router();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(`${this.path}`, this.authenticate);
  }

  async authenticate(
    req: Request,
    res: ApiResponse<ResponseContent<AuthResponse>>,
    next: NextFunction
  ): Promise<ApiResponse<ResponseContent<AuthResponse>> | undefined> {
    try {
      const employeeService = new EmployeeService();
      const authService = new AuthService();
      const result = await employeeService.getOneByEmail(req.body.email);
      if (result) {
        await authService.verifyPassword(req.body.password, result.password, req.body.email);
        const token = await authService.generateToken(result.employeeNumber, result.email);
        return res.status(200).json({ payload: { token } });
      }
    } catch (error) {
      next(error);
    }
  }
}
