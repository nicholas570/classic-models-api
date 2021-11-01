import { Router, Request, NextFunction } from 'express';
import { Office } from '../entity/Office';
import { DeleteException } from '../exceptions/DeleteException';
import { EmptySearchException } from '../exceptions/EmptySearchException';
import { EntityNotFoundException } from '../exceptions/NotFoundException';
import { ApiResponse, ResponseContent, SuccessResponse } from '../interfaces/apiResponse';
import { RouteController } from '../interfaces/controller';
import { OfficeService } from '../services/OfficeService';

export class OfficeController implements RouteController {
  path = '/offices';
  router = Router();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes(): void {
    this.router.get(`${this.path}`, this.getAll);
    this.router.get(`${this.path}/:officeCode`, this.getOne);
    this.router.post(`${this.path}`, this.create);
    this.router.put(`${this.path}/:officeCode`, this.update);
    this.router.delete(`${this.path}/:officeCode`, this.delete);
  }

  async getAll(
    req: Request,
    res: ApiResponse<ResponseContent<Office[]>>,
    next: NextFunction
  ): Promise<ApiResponse<ResponseContent<Office[]>> | undefined> {
    try {
      const officeService = new OfficeService();
      const results = await officeService.getAll();
      if (results.length) {
        return res.status(200).json({ payload: results });
      } else {
        throw new EmptySearchException('offices');
      }
    } catch (error) {
      next(error);
    }
  }

  async getOne(
    req: Request,
    res: ApiResponse<ResponseContent<Office>>,
    next: NextFunction
  ): Promise<ApiResponse<ResponseContent<Office>> | undefined> {
    try {
      const officeService = new OfficeService();
      const result = await officeService.getOne(req.params.officeCode);
      if (result) {
        return res.status(200).json({ payload: result });
      } else {
        throw new EntityNotFoundException(req.params.officeCode, 'Office');
      }
    } catch (error) {
      next(error);
    }
  }

  async create(
    req: Request,
    res: ApiResponse<ResponseContent<Office>>,
    next: NextFunction
  ): Promise<ApiResponse<ResponseContent<Office>> | undefined> {
    try {
      const officeService = new OfficeService();
      const result = await officeService.create(req.body);
      return res.status(201).json({ payload: result! });
    } catch (error) {
      next(error);
    }
  }

  async update(
    req: Request,
    res: ApiResponse<ResponseContent<Office>>,
    next: NextFunction
  ): Promise<ApiResponse<ResponseContent<Office>> | undefined> {
    try {
      const officeService = new OfficeService();
      const result = await officeService.update(req.params.officeCode, req.body);
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
      const officeService = new OfficeService();
      const result = await officeService.delete(req.params.officeCode);
      if (result.affected) {
        return res.status(200).json({ payload: { message: `Successfuly deleted office ${req.params.officeCode}` } });
      } else {
        throw new DeleteException(req.params.officeCode, 'office');
      }
    } catch (error) {
      next(error);
    }
  }
}
