import { AppRepository } from '../interfaces/Repository';
import { getConnection } from 'typeorm';
import { Office } from '../entity/Office';

export class OfficeRepository implements AppRepository {
  repository = getConnection().getRepository(Office);

  async getAll(): Promise<Office[]> {
    const offices = await this.repository.find();
    return offices;
  }

  async getOne(officeCode: string): Promise<Office | undefined> {
    const office = await this.repository.findOne({ where: { officeCode } });
    return office;
  }

  async create(office: Office): Promise<Office | undefined> {
    const newOffice = await this.repository.save(office);
    return newOffice;
  }
}
