import { Category } from "src/entity/category.entity"
import { Product } from "src/entity/product.entity"
import { Settings } from "src/entity/settings.entity"
import { User } from "src/entity/user.entity"
import { DataSource } from "typeorm"

export const mysqlProviders = [
    {
        provide: 'MYSQL_CONNECTION',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '123456789',
                database: 'ceoks',
                entities: [
                    Settings,
                    Category,
                    Product,
                    User
                ],
                synchronize: true
            })

            return dataSource.initialize()
        }
    }
]