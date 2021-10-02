import { Entity, Column, PrimaryColumn } from 'typeorm';
import { OfficeModel } from '../models/OfficeModel';

@Entity()
export class Office implements OfficeModel {
  @PrimaryColumn({ type: 'varchar', unique: true })
  officeCode!: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  city!: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  phone!: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  addressLine1!: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  addressLine2!: string | null;

  @Column({ type: 'varchar', length: 50, nullable: true })
  state!: string | null;

  @Column({ type: 'varchar', length: 50, nullable: false })
  country!: string;

  @Column({ type: 'varchar', length: 15, nullable: false })
  postalCode!: string;

  @Column({ type: 'varchar', length: 10, nullable: false })
  territory!: string;
}
