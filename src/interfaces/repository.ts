interface Repository {
  getAll: () => Promise<any>;
  create: (param: any) => Promise<any>;
}

export default Repository;
