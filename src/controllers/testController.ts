import { Router, Request, Response, NextFunction } from 'express';
import Controller from '../interfaces/Controller';
import User from '../models/UserModel';
import TestService from '../services/testService';

class TestController implements Controller {
  public path = '/test';
  public router = Router();
  public service = new TestService();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(`${this.path}`, this.getAll);
  }

  private async getAll(req: Request, res: Response, next: NextFunction): Promise<Response<User[]> | undefined> {
    try {
      const testService = new TestService();
      const results = await testService.getAll();
      return res.status(200).json(results);
    } catch (error) {
      next(error);
    }
  }
}

export default TestController;
