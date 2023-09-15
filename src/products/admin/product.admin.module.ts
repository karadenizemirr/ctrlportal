import { Module } from "@nestjs/common";
import { ProductAdminController } from "./product.admin.controller";
import { ProductService } from "../product.service";
import { CategoryAdminModule } from "src/category/admin/category.admin.module";
import { DatabaseModule } from "src/database/database.module";
import { productProviders } from "src/provider/product.provider";

@Module({
    imports: [DatabaseModule,CategoryAdminModule],
    controllers: [ProductAdminController],
    providers: [ProductService, ...productProviders]
})
export class ProductAdminModule {

}