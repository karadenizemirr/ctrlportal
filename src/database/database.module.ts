import { Module } from "@nestjs/common";
import { mysqlProviders } from "./mysql/mysql.provider";

@Module({
    providers: [...mysqlProviders],
    exports: [...mysqlProviders]
})
export class DatabaseModule{}