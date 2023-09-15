import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    surname: string

    @Column()
    email:string

    @Column()
    phone:string

    @Column()
    subject:string

    @Column()
    message:string
}