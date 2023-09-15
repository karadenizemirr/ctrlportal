import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Settings {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string

    @Column()
    welcome_message:string

    @Column()
    email: string

    @Column()
    phone: string

    @Column()
    address: string

    @CreateDateColumn()
    created_at: Date

    private static instance:Settings
    private constructor () {}

    public static getInstance(): Settings {
        if (!Settings.instance){
            Settings.instance = new Settings()
        }
        return Settings.instance
    }
}