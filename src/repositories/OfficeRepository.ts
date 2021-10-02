import Repository from '../interfaces/Repository';
import { getConnection } from 'typeorm';
import { Office } from '../entity/Office';

export class OfficeRepository implements Repository {
  public ORMrepository = getConnection().getRepository(Office);

  public async getAll(): Promise<Office[]> {
    const offices = await this.ORMrepository.find();
    return offices;
  }

  public async getOne(officeCode: string): Promise<Office | undefined> {
    const office = await this.ORMrepository.findOne({ where: { officeCode } });
    return office;
  }

  public async create(office: Office): Promise<Office | undefined> {
    const newOffice = await this.ORMrepository.save(office);
    return newOffice;
  }
}
