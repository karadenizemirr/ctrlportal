import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuid4} from 'uuid'

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string = uuid4()

    @Column()
    name:string

    @Column()
    surname:string

    @Column()
    phone: string

    @Column()
    email: string

    @Column()
    isActive:string

    @Column()
    password:string

    @CreateDateColumn()
    created_at: Date
}