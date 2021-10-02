import { Employee } from '../entity/Employee';
import { Service } from '../interfaces/Service';
import { EmployeeRepository } from '../repositories/EmployeeRepository';

export class EmployeeService implements Service {
  repository = new EmployeeRepository();

  async getAll(): Promise<Employee[]> {
    const results = await this.repository.getAll();
    return results;
  }

  async getOne(employeeNumber: number): Promise<Employee | undefined> {
    const result = await this.repository.getOne(employeeNumber);
    return result;
  }

  async create(employee: Employee): Promise<Employee | undefined> {
    const results = await this.repository.create(employee);
    return results;
  }
}
