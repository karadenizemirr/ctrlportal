import { Contact } from "src/entity/contact.entity";
import { DataSource } from "typeorm";

export const contactProvider = [
    {
        provide: 'CONTACT_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Contact),
        inject:'MYSQL_CONNECTION'
    }
]