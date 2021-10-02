import Repository from '../interfaces/Repository';
import User from '../models/UserModel';

class TestRepository implements Repository {
  public async getAll(): Promise<User[]> {
    // db query
    const users = [{ name: 'John', age: 36 }];
    const results: Promise<User[]> = new Promise((res) => setTimeout(res, 1500, users));
    return results;
  }
}

export default TestRepository;
