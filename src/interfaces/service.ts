import User from '../models/UserModel';

interface Service {
  getAll: () => Promise<User[]>;
}

export default Service;
