import { Controller, Get, Param, Render } from "@nestjs/common";
import { ProductService } from "./product.service";

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Get('/:product_id')
    @Render('product-detail')
    async products(@Param('product_id') category_id:number){
        const product = await this.productService.get_product_by_id(category_id)

        return {
            title: 'Products',
            product: product
        }
    }
}