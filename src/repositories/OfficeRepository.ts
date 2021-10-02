import Repository from '../interfaces/Repository';
import { getConnection } from 'typeorm';
import { Office } from '../entity/Office';

export class OfficeRepository implements Repository {
  public repository = getConnection().getRepository(Office);

  public async getAll(): Promise<Office[]> {
    const offices = await this.repository.find();
    return offices;
  }

  public async create(office: Office): Promise<Office | undefined> {
    await this.repository.save(office);
    const newOffice = await this.repository.findOne(office);
    return newOffice;
  }
}
