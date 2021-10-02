import { Office } from '../entity/Office';
import { toOfficeEntity } from '../helper/office';
import { Service } from '../interfaces/Service';
import { OfficeRepository } from '../repositories/OfficeRepository';

export class OfficeService implements Service {
  private officeRepository = new OfficeRepository();

  public async getAll(): Promise<Office[]> {
    const results = await this.officeRepository.getAll();
    return results;
  }

  public async getOne(officeCode: string): Promise<Office | undefined> {
    const result = await this.officeRepository.getOne(officeCode);
    return result;
  }

  public async create(office: Office): Promise<Office | undefined> {
    const newOffice = toOfficeEntity(office);
    const results = await this.officeRepository.create(newOffice);
    return results;
  }
}
