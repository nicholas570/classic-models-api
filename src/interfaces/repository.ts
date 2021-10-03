import { Repository } from 'typeorm';
import { SearchQueryFilters } from './SearchQuery';

export interface AppRepository {
  repository: Repository<any>;

  getAll(filters: SearchQueryFilters): Promise<any>;
  getOne(param: any): Promise<any>;
  create(param: any): Promise<any>;
  update(id: number | string, param: any): Promise<any>;
  delete(id: number | string): Promise<any>;
}
