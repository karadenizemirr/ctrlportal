import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category.entity";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    features: string

    @Column()
    images: string
    
    @CreateDateColumn()
    createdAt: Date;
    
    @ManyToOne(() => Category, category => category.products)
    category: Category
}