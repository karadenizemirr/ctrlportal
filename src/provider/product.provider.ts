import { Product } from "src/entity/product.entity";
import { DataSource } from "typeorm";

export const productProviders = [
    {
        provide:'PRODUCT_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(Product),
        inject: ['MYSQL_CONNECTION']
    }
]