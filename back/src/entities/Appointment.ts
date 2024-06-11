import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

export enum Status {
  ACTIVE = "active",
  CANCELLED = "cancelled",
}

@Entity("APPOINTMENTS")
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  time: string;

  @Column({ type: "enum", enum: Status, default: Status.ACTIVE })
  status: Status;

  @Column()
  action: string;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;
}
