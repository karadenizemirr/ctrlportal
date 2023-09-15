import { Controller, Get, Param, Render } from "@nestjs/common";
import { CategoryService } from "./category.service";

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) {}

    // Category with Product
    @Get('/:category_id')
    @Render('products')
    async get_category_with_product(@Param('category_id') category_id:number){
        const _products = await this.categoryService.get_category_with_product(category_id)
        return {
            products: _products.products
        }
    }
}