import { NextFunction, Request, Response, Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { BaseController } from '../interfaces/controller';
import { EmployeeService } from '../services/EmployeeService';
import { EntityNotFoundException } from '../exceptions/NotFoundException';
import { ApiResponse, AuthResponse, ResponseContent } from './apiResponse';

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
      const compared = await bcrypt.compare(password, hash);
      return compared;
    } catch (error) {
      throw error;
    }
  }

  static async generateToken(id: number, email: string): Promise<string> {
    try {
      const token = jwt.sign({ id, email }, process.env.JWT_PRIVATE_KEY!, { algorithm: 'HS256' });
      return token;
    } catch (error) {
      throw error;
    }
  }

  async authenticate(
    req: Request,
    res: ApiResponse<ResponseContent<AuthResponse>>,
    next: NextFunction
  ): Promise<ApiResponse<ResponseContent<AuthResponse>> | undefined> {
    try {
      const employeeService = new EmployeeService();
      const result = await employeeService.getOneByEmail(req.body.email);
      if (result) {
        const isValidCredentials = await AuthController.verifyPassword(req.body.password, result.password);
        const token = await AuthController.generateToken(result.employeeNumber, result.email);
        return res.status(200).json({ payload: { isAuthenticated: isValidCredentials, token } });
      } else {
        throw new EntityNotFoundException(req.body.email, 'Employee');
      }
    } catch (error) {
      next(error);
    }
  }
}
