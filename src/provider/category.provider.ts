import { Category } from "src/entity/category.entity";
import { DataSource } from "typeorm";

export const categoryProviders = [
    {
        provide: 'CATEGORY_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(Category),
        inject: ['MYSQL_CONNECTION']
    }
]