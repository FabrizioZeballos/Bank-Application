import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Credential } from "./Credential";
import { Appointment } from "./Appointment";

@Entity("USERS")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column()
  birthdate: string;

  @Column()
  identityNumber: number;

  @Column({ default: "https://cdn-icons-png.freepik.com/512/8742/8742495.png" })
  profilePicture: string;

  @OneToOne(() => Credential)
  @JoinColumn()
  credentials: Credential;

  @OneToMany(() => Appointment, (appointment) => appointment.user)
  @JoinColumn()
  appointments: Appointment[];
}
