import { AppRepository } from './repository';
import { SearchQueryFilters } from './searchQueryFilters';

export interface Service {
  repository: AppRepository;

  getAll(filters?: SearchQueryFilters): Promise<any[]>;
  getOne(param: any): Promise<any>;
  create(param: any): Promise<any>;
  update(id: number | string, param: any): Promise<any>;
  delete(id: number | string): Promise<any>;
}
