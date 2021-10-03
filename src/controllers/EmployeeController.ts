import { NextFunction, Request, Response, Router } from 'express';
import { Employee } from '../entity/Employee';
import { RouteController } from '../interfaces/Controller';
import { EmployeeService } from '../services/EmployeeService';

export class EmployeeController implements RouteController {
  path = '/employees';
  router = Router();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get(`${this.path}`, this.getAll);
    this.router.get(`${this.path}/:employeeNumber`, this.getOne);
    this.router.post(`${this.path}`, this.create);
    this.router.put(`${this.path}/:employeeNumber`, this.update);
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<Response<Employee[]> | undefined> {
    try {
      const employeeService = new EmployeeService();
      const results = await employeeService.getAll();
      return res.status(200).json(results);
    } catch (error) {
      next(error);
    }
  }

  async getOne(req: Request, res: Response, next: NextFunction): Promise<Response<Employee> | undefined> {
    try {
      const employeeService = new EmployeeService();
      const results = await employeeService.getOne(parseInt(req.params.employeeNumber));
      return res.status(200).json(results);
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<Response<Employee> | undefined> {
    try {
      const employeeService = new EmployeeService();
      const result = await employeeService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<Response<Employee> | undefined> {
    try {
      const employeeService = new EmployeeService();
      const result = await employeeService.update(req.params.employeeNumber, req.body);
      return res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
}
