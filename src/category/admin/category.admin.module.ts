import { Module } from "@nestjs/common";
import { CategoryAdminController } from "./category.admin.controller";
import { CategoryService } from "../category.service";
import { categoryProviders } from "src/provider/category.provider";
import { DatabaseModule } from "src/database/database.module";

@Module({
    imports: [DatabaseModule],
    controllers: [CategoryAdminController],
    providers: [CategoryService, ...categoryProviders],
    exports: [CategoryService]
})
export class CategoryAdminModule {}