export interface EmployeeModel {
  employeeNumber: number;
  lastName: string;
  firstName: string;
  extension: string;
  email: string;
  officeCode: string;
  manager?: number;
  jobTitle: string;
}
