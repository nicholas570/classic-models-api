import { DeleteResult } from 'typeorm';
import { Office } from '../entity/Office';
import { Service } from '../interfaces/Service';
import { OfficeRepository } from '../repositories/OfficeRepository';

export class OfficeService implements Service {
  repository = new OfficeRepository();

  async getAll(): Promise<Office[]> {
    const results = await this.repository.getAll();
    return results;
  }

  async getOne(officeCode: string): Promise<Office | undefined> {
    const result = await this.repository.getOne(officeCode);
    return result;
  }

  async create(office: Office): Promise<Office | undefined> {
    const results = await this.repository.create(office);
    return results;
  }

  async update(officeCode: string, office: Office): Promise<Office | undefined> {
    const results = await this.repository.update(officeCode, office);
    return results;
  }

  async delete(officeCode: string): Promise<DeleteResult> {
    const result = await this.repository.delete(officeCode);
    return result;
  }
}
