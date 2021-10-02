import User from '../models/UserModel';
import IService from '../interfaces/Service';
import TestRepository from '../repositories/testRepository';

class TestService implements IService {
  public async getAll(): Promise<User[]> {
    const testRepository = new TestRepository();
    const results = await testRepository.getAll();
    return results;
  }
}

export default TestService;
