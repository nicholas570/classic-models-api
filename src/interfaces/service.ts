export interface Service {
  getAll: () => Promise<any[]>;
  getOne: (param: any) => Promise<any>;
  create: (param: any) => Promise<any>;
}
