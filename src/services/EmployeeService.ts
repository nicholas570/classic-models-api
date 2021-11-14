import { DeleteResult } from 'typeorm';
import { Employee } from '../entity/Employee';
import { DeleteException } from '../exceptions/DeleteException';
import { EmptySearchException } from '../exceptions/EmptySearchException';
import { EntityNotFoundException } from '../exceptions/NotFoundException';
import { SearchQueryFilters } from '../interfaces/searchQueryFilters';
import { Service } from '../interfaces/service';
import { EmployeeRepository } from '../repositories/EmployeeRepository';

export class EmployeeService implements Service {
  repository = new EmployeeRepository();

  async getAll(filters: SearchQueryFilters): Promise<Employee[]> {
    const results = await this.repository.getAll(filters);
    if (!results.length)
      throw new EmptySearchException(`employees ${Object.entries(filters).length ? 'with these filters' : ''}`);
    return results;
  }

  async getAllByOffice(officeCode: string): Promise<Employee[]> {
    const results = await this.repository.getAllByOffice(officeCode);
    return results;
  }

  async getOne(employeeNumber: number): Promise<Employee> {
    const result = await this.repository.getOne(employeeNumber);
    if (!result) throw new EntityNotFoundException(employeeNumber.toString(), 'Employee');
    return result;
  }

  async getOneByEmail(email: string): Promise<Employee> {
    const result = await this.repository.getOneByEmail(email);
    if (!result) throw new EntityNotFoundException(email, 'Employee');
    return result;
  }

  async create(employee: Employee): Promise<Employee | undefined> {
    const result = await this.repository.create(employee);
    return result;
  }

  async update(employeeNumber: string, employee: Employee): Promise<Employee | undefined> {
    const result = await this.repository.update(employeeNumber, employee);
    return result;
  }

  async delete(employeeNumber: string): Promise<DeleteResult> {
    const result = await this.repository.delete(employeeNumber);
    if (!result.affected) throw new DeleteException(employeeNumber, 'employee');
    return result;
  }
}
