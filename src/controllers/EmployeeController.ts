import { NextFunction, Request, Router } from 'express';
import { Employee } from '../entity/Employee';
import { DeleteException } from '../exceptions/DeleteException';
import { EmptySearchException } from '../exceptions/EmptySearchException';
import { EntityNotFoundException } from '../exceptions/NotFoundException';
import { ApiResponse, ResponseContent, SuccessResponse } from '../interfaces/apiResponse';
import { RouteController } from '../interfaces/controller';
import passwordMiddleware from '../middlewares/passwordMiddelware';
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
    this.router.post(`${this.path}`, passwordMiddleware.hash, this.create);
    this.router.put(`${this.path}/:employeeNumber`, this.update);
    this.router.delete(`${this.path}/:employeeNumber`, this.delete);
  }

  async getAll(
    req: Request,
    res: ApiResponse<ResponseContent<Employee[]>>,
    next: NextFunction
  ): Promise<ApiResponse<ResponseContent<Employee[]>> | undefined> {
    try {
      const employeeService = new EmployeeService();
      const results = await employeeService.getAll(req.query);
      if (results.length) {
        return res.status(200).json({ payload: results });
      } else {
        throw new EmptySearchException(`employees ${Object.entries(req.query).length ? 'with these filters' : ''}`);
      }
    } catch (error) {
      next(error);
    }
  }

  async getOne(
    req: Request,
    res: ApiResponse<ResponseContent<Employee>>,
    next: NextFunction
  ): Promise<ApiResponse<ResponseContent<Employee>> | undefined> {
    try {
      const employeeService = new EmployeeService();
      const result = await employeeService.getOne(parseInt(req.params.employeeNumber));
      if (result) {
        return res.status(200).json({ payload: result });
      } else {
        throw new EntityNotFoundException(req.params.employeeNumber, 'Employee');
      }
    } catch (error) {
      next(error);
    }
  }

  async create(
    req: Request,
    res: ApiResponse<ResponseContent<Employee>>,
    next: NextFunction
  ): Promise<ApiResponse<ResponseContent<Employee>> | undefined> {
    try {
      const employeeService = new EmployeeService();
      const result = await employeeService.create(req.body);
      return res.status(201).json({ payload: result! });
    } catch (error) {
      next(error);
    }
  }

  async update(
    req: Request,
    res: ApiResponse<ResponseContent<Employee>>,
    next: NextFunction
  ): Promise<ApiResponse<ResponseContent<Employee>> | undefined> {
    try {
      const employeeService = new EmployeeService();
      const result = await employeeService.update(req.params.employeeNumber, req.body);
      return res.status(200).json({ payload: result! });
    } catch (error) {
      next(error);
    }
  }

  async delete(
    req: Request,
    res: ApiResponse<ResponseContent<SuccessResponse>>,
    next: NextFunction
  ): Promise<ApiResponse<ResponseContent<SuccessResponse>> | undefined> {
    try {
      const employeeService = new EmployeeService();
      const result = await employeeService.delete(req.params.employeeNumber);
      if (result.affected) {
        return res
          .status(200)
          .json({ payload: { message: `Successfuly deleted employee ${req.params.employeeNumber}` } });
      } else {
        throw new DeleteException(req.params.employeeNumber, 'employee');
      }
    } catch (error) {
      next(error);
    }
  }
}
