import { Router, Request, Response, NextFunction } from 'express';
import { Office } from '../entity/Office';
import Controller from '../interfaces/Controller';
import { OfficeService } from '../services/OfficeService';

export class OfficeController implements Controller {
  public path = '/offices';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(`${this.path}`, this.getAll);
    this.router.post(`${this.path}`, this.create);
  }

  private async getAll(req: Request, res: Response, next: NextFunction): Promise<Response<Office[]> | undefined> {
    try {
      const officeService = new OfficeService();
      const results = await officeService.getAll();
      return res.status(200).json(results);
    } catch (error) {
      next(error);
    }
  }

  private async create(req: Request, res: Response, next: NextFunction): Promise<Response<any> | undefined> {
    try {
      const officeService = new OfficeService();
      const result = await officeService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
}
