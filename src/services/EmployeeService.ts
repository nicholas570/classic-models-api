import { DeleteResult } from 'typeorm';
import { Employee } from '../entity/Employee';
import { SearchQueryFilters } from '../interfaces/searchQuery';
import { Service } from '../interfaces/service';
import { EmployeeRepository } from '../repositories/EmployeeRepository';

export class EmployeeService implements Service {
  repository = new EmployeeRepository();

  async getAll(filters: SearchQueryFilters): Promise<Employee[]> {
    const results = await this.repository.getAll(filters);
    return results;
  }

  async getAllByOffice(officeCode: string): Promise<Employee[]> {
    const results = await this.repository.getAllByOffice(officeCode);
    return results;
  }

  async getOne(employeeNumber: number): Promise<Employee | undefined> {
    const result = await this.repository.getOne(employeeNumber);
    return result;
  }

  async getOneByEmail(email: string): Promise<Employee | undefined> {
    const result = await this.repository.getOneByEmail(email);
    return result;
  }

  async create(employee: Employee): Promise<Employee | undefined> {
    const results = await this.repository.create(employee);
    return results;
  }

  async update(employeeNumber: string, employee: Employee): Promise<Employee | undefined> {
    const result = await this.repository.update(employeeNumber, employee);
    return result;
  }

  async delete(employeeNumber: string): Promise<DeleteResult> {
    const result = await this.repository.delete(employeeNumber);
    return result;
  }
}
