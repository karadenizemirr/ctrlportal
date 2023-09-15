import { Google } from "src/entity/google.entity";
import { DataSource } from "typeorm";

export const googleProvider = [
    {
        provide: 'GOOGLE_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(Google),
        inject: ['MYSQL_CONNECTION']
    }
]