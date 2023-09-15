import { Module } from "@nestjs/common";
import { CategoryController } from "./category.controller";
import { CategoryAdminModule } from "./admin/category.admin.module";
import { CategoryService } from "./category.service";
import { DatabaseModule } from "src/database/database.module";
import { categoryProviders } from "src/provider/category.provider";

@Module({
    imports: [CategoryAdminModule, DatabaseModule],
    controllers: [CategoryController],
    providers: [CategoryService, ...categoryProviders],
})
export class CategoryModule {
}