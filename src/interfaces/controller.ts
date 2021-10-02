import { NextFunction, Request, Response, Router } from 'express';

export interface BaseController {
  path: string;
  router: Router;
}

export interface RouteController extends BaseController {
  initializeRoutes(): void;
  getAll(req: Request, res: Response, next: NextFunction): Promise<any>;
  getOne(req: Request, res: Response, next: NextFunction): Promise<any>;
  create(req: Request, res: Response, next: NextFunction): Promise<any>;
}
