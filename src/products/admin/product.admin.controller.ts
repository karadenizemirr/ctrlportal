import { FileInterceptor, MemoryStorageFile, UploadedFile } from "@blazity/nest-file-fastify";
import { Body, Controller, Get, Param, Post, Render, Res, UseGuards, UseInterceptors } from "@nestjs/common";
import { CategoryService } from "src/category/category.service";
import { ProductService } from "../product.service";
import { Response } from "express";
import { AuthGuard } from "src/guard/auth.guard";

@Controller('product')
@UseGuards(AuthGuard)
export class ProductAdminController {
    constructor(private categoryService: CategoryService, private productService: ProductService) {}

    @Get()
    @Render('admin/product')
    async get_product(){
        const categories = await this.categoryService.get_all_category()
        const products = await this.productService.get_all_product()
        return {
            title: 'Ürün İşlemleri',
            categories: categories,
            products: products
        }
    }

    @Post()
    @UseInterceptors(FileInterceptor('image', {
        dest: 'src/assets/public/upload'
    }))
    async post_product(@Body() data:any, @UploadedFile() file: MemoryStorageFile, @Res() res:Response){
        const filename = '/public/upload/' + file['filename']
        data.images = filename
        await this.productService.add_product(data)


        res.redirect(302, '/admin/product')

    }

    @Get('/delete/:id')
    async delete_product(@Param('id') id:number, @Res() res:Response){
        await this.productService.delete_prooduct(id)
        res.redirect(302, '/admin/product')
        
    }

    @Get('/:product_id')
    @Render('admin/product-detail')
    async get_product_detail(@Param('product_id') product_id:number){
        const product = await this.productService.get_product_by_id(product_id)
        return {
            title: "Product Detail",
            product: product
        }
    }

    @Post('/update/:id')
    @UseInterceptors(FileInterceptor('image', {
        dest: 'src/assets/public/upload'
    }))
    async post_update_product(@Body() data:any, @UploadedFile() file: MemoryStorageFile, @Res() res:Response, @Param('id') id:number){
        if (file){
            const filename = '/public/upload/' + file['filename']
            data.images = filename
        }
        await this.productService.update_product(id, data)
        res.redirect(302, '/admin/product/' + id)
    }
    
}