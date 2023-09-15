import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Google {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    name: string;   

    @Column({nullable: true})
    phone_number: string;

    @Column({nullable: true})
    full_address: string;

    @Column({nullable: true})
    raiting: number;

    @Column({nullable: true})
    website: string

    @Column({nullable: true})
    type: string

    @Column({nullable: true})
    district: string

    @Column({nullable: true})
    street_address: string

    @Column({nullable: true})
    city: string

    @Column({nullable: true})
    country: string

    @CreateDateColumn()
    created_at: Date
}