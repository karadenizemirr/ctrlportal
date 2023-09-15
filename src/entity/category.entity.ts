import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @CreateDateColumn()
    created_at: Date

    @OneToMany(() => Product, product => product.category, {cascade: true})
    products: Product[]

}