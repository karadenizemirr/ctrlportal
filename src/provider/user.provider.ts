import { User } from "src/entity/user.entity";
import { DataSource } from "typeorm";

export const userProvider = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
        inject: ['MYSQL_CONNECTION']
    }
]