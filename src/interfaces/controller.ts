import { NextFunction, Request, Response, Router } from 'express';

export interface BaseController {
  path: string;
  router: Router;
  initializeRoutes(): void;
}

export interface RouteController extends BaseController {
  getAll(req: Request, res: Response, next: NextFunction): Promise<any>;
  getOne(req: Request, res: Response, next: NextFunction): Promise<any>;
  create(req: Request, res: Response, next: NextFunction): Promise<any>;
  update(req: Request, res: Response, next: NextFunction): Promise<any>;
  delete(req: Request, res: Response, next: NextFunction): Promise<any>;
}
