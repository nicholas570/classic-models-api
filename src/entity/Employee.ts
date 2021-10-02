import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from 'typeorm';
import { EmployeeModel } from '../models/EmployeeModel';
import { Office } from './Office';

@Entity()
export class Employee implements EmployeeModel {
  @PrimaryGeneratedColumn({ type: 'int' })
  employeeNumber!: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  lastName!: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  firstName!: string;

  @Column({ type: 'varchar', length: 10, nullable: false })
  extension!: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  email!: string;

  @Column({ type: 'varchar', length: 10, nullable: false })
  @ManyToOne(() => Office, (office) => office.officeCode)
  officeCode!: string;

  @Column({ type: 'int', default: null })
  @OneToOne(() => Employee, (employee) => employee.employeeNumber)
  manager!: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  jobTitle!: string;
}
