import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { CategoryAdminModule } from "src/category/admin/category.admin.module";
import { DatabaseModule } from "src/database/database.module";
import { productProviders } from "src/provider/product.provider";

@Module({
    imports:[CategoryAdminModule, DatabaseModule],
    controllers:[ProductController],
    providers:[ProductService, ...productProviders],
})
export class ProductModule {

}