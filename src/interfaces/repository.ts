import { Repository } from 'typeorm';

export interface AppRepository {
  repository: Repository<any>;

  getAll(): Promise<any>;
  getOne(param: any): Promise<any>;
  create(param: any): Promise<any>;
  update(id: number | string, param: any): Promise<any>;
}
