import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category.entity";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column({type:'varchar', length: 500})
    description: string

    @Column({type:'varchar', length: 500})
    features: string

    @Column()
    images: string
    
    @CreateDateColumn()
    createdAt: Date;
    
    @ManyToOne(() => Category, category => category.products)
    category: Category
}