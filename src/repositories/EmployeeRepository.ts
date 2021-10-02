import { AppRepository } from '../interfaces/Repository';
import { getConnection } from 'typeorm';
import { Employee } from '../entity/Employee';

export class EmployeeRepository implements AppRepository {
  repository = getConnection().getRepository(Employee);

  async getAll(): Promise<Employee[]> {
    const employees = await this.repository.find();
    return employees;
  }

  async getOne(employeeNumber: number): Promise<Employee | undefined> {
    const employee = await this.repository.findOne({ where: { employeeNumber } });
    return employee;
  }

  async create(employee: Employee): Promise<Employee | undefined> {
    const newEmployee = await this.repository.save(employee);
    return newEmployee;
  }
}
