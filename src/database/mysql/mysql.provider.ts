import { Category } from "src/entity/category.entity"
import { Google } from "src/entity/google.entity"
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
                host: 'eyvqcfxf5reja3nv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
                port: 3306,
                username: 'qf42x5fva9kbtie5',
                password: 'wsnokb8xyk1n473x',
                database: 'lukucuu6m6siq9eo',
                entities: [
                    Settings,
                    Category,
                    Product,
                    User,
                    Google
                ],
                synchronize: true
            })

            return dataSource.initialize()
        }
    }
]