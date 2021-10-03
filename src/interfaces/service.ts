import { AppRepository } from './Repository';

export interface Service {
  repository: AppRepository;

  getAll(): Promise<any[]>;
  getOne(param: any): Promise<any>;
  create(param: any): Promise<any>;
  update(id: number | string, param: any): Promise<any>;
}
