import { Router, Request, Response, NextFunction } from 'express';
import { Office } from '../entity/Office';
import { DeleteException } from '../exceptions/DeleteException';
import { EmptySearchException } from '../exceptions/EmptySearchException';
import { EntityNotFoundException } from '../exceptions/NotFoundException';
import { RouteController } from '../interfaces/Controller';
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

  async getAll(req: Request, res: Response, next: NextFunction): Promise<Response<Office[]> | undefined> {
    try {
      const officeService = new OfficeService();
      const results = await officeService.getAll();
      if (results.length) {
        return res.status(200).json(results);
      } else {
        throw new EmptySearchException('offices');
      }
    } catch (error) {
      next(error);
    }
  }

  async getOne(req: Request, res: Response, next: NextFunction): Promise<Response<Office[]> | undefined> {
    try {
      const officeService = new OfficeService();
      const result = await officeService.getOne(req.params.officeCode);
      if (result) {
        return res.status(200).json(result);
      } else {
        throw new EntityNotFoundException(req.params.officeCode, 'Office');
      }
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<Response<Office> | undefined> {
    try {
      const officeService = new OfficeService();
      const result = await officeService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<Response<Office> | undefined> {
    try {
      const officeService = new OfficeService();
      const result = await officeService.update(req.params.officeCode, req.body);
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<Response<{ message: string }> | undefined> {
    try {
      const officeService = new OfficeService();
      const result = await officeService.delete(req.params.officeCode);
      if (result.affected) {
        return res.status(200).json({ message: `Successfuly deleted office ${req.params.officeCode}` });
      } else {
        throw new DeleteException(req.params.officeCode, 'office');
      }
    } catch (error) {
      next(error);
    }
  }
}
