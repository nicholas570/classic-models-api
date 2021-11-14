import { DeleteResult } from 'typeorm';
import { Office } from '../entity/Office';
import { DeleteException } from '../exceptions/DeleteException';
import { EmptySearchException } from '../exceptions/EmptySearchException';
import { EntityNotFoundException } from '../exceptions/NotFoundException';
import { Service } from '../interfaces/service';
import { OfficeRepository } from '../repositories/OfficeRepository';

export class OfficeService implements Service {
  repository = new OfficeRepository();

  async getAll(): Promise<Office[]> {
    const results = await this.repository.getAll();
    if (!results.length) throw new EmptySearchException('offices');
    return results;
  }

  async getOne(officeCode: string): Promise<Office | undefined> {
    const result = await this.repository.getOne(officeCode);
    if (!result) throw new EntityNotFoundException(officeCode, 'Office');
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
    if (!result.affected) throw new DeleteException(officeCode, 'office');
    return result;
  }
}
