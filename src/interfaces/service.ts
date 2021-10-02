export interface Service {
  getAll: () => Promise<any[]>;
  create: (param: any) => Promise<any>;
}
