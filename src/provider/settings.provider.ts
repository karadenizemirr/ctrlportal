import { Settings } from "src/entity/settings.entity";
import { DataSource } from "typeorm";

export const settingsProvider = [
    {
        provide: 'SETTINGS_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Settings),
        inject: ['MYSQL_CONNECTION']
    }
]