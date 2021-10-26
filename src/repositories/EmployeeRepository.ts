import { AppRepository } from '../interfaces/Repository';
import { DeleteResult, getConnection } from 'typeorm';
import { Employee } from '../entity/Employee';
import { SearchQueryFilters } from '../interfaces/SearchQuery';

export class EmployeeRepository implements AppRepository {
  repository = getConnection().getRepository(Employee);

  async getAll(filters: SearchQueryFilters): Promise<Employee[]> {
    const employees = await this.repository.find({ where: filters });
    return employees;
  }

  async getAllByOffice(officeCode: string): Promise<Employee[]> {
    const employees = await this.repository.find({ where: { officeCode } });
    return employees;
  }

  async getOne(employeeNumber: number): Promise<Employee | undefined> {
    const employee = await this.repository.findOne({ where: { employeeNumber } });
    return employee;
  }

  async getOneByEmail(email: string): Promise<Employee | undefined> {
    const employee = await this.repository.findOne({
      select: ['employeeNumber', 'email', 'password'],
      where: { email },
    });
    return employee;
  }

  async create(employee: Employee): Promise<Employee | undefined> {
    const newEmployee = await this.repository.save(employee);
    return newEmployee;
  }

  async update(employeeNumber: string, employee: Employee): Promise<Employee | undefined> {
    const result = await this.repository.update(employeeNumber, employee);
    if (result.affected === 1) {
      const updatedOffice = await this.repository.findOne(employee);
      return updatedOffice;
    }
  }

  async delete(employeeNumber: string): Promise<DeleteResult> {
    const result = await this.repository.delete(employeeNumber);
    return result;
  }
}
