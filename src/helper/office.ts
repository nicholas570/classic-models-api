import { Request } from 'express';
import { Office } from '../entity/Office';
import { OfficeModel } from '../models/OfficeModel';

export const toOfficeEntity = (office: OfficeModel): Office => {
  const newOffice = new Office();
  newOffice.officeCode = office.officeCode;
  newOffice.city = office.city;
  newOffice.phone = office.phone;
  newOffice.addressLine1 = office.addressLine1;
  newOffice.addressLine2 = office.addressLine2;
  newOffice.state = office.state;
  newOffice.country = office.country;
  newOffice.postalCode = office.postalCode;
  newOffice.territory = office.territory;
  return newOffice;
};
