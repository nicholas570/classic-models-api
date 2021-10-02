import { Office } from '../entity/Office';
import { toOfficeEntity } from '../helper/office';
import { Service } from '../interfaces/Service';
import { OfficeRepository } from '../repositories/OfficeRepository';

export class OfficeService implements Service {
  public async getAll(): Promise<Office[]> {
    const officeRepository = new OfficeRepository();
    const results = await officeRepository.getAll();
    return results;
  }

  public async create(office: Office): Promise<Office | undefined> {
    const officeRepository = new OfficeRepository();
    const newOffice = toOfficeEntity(office);
    const results = await officeRepository.create(newOffice);
    return results;
  }
}
