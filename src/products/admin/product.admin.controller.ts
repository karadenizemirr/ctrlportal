import { FileInterceptor, MemoryStorageFile, UploadedFile } from "@blazity/nest-file-fastify";
import { Body, Controller, Get, Param, Post, Render, Res, UseInterceptors } from "@nestjs/common";
import { CategoryService } from "src/category/category.service";
import {v4 as uuid4} from 'uuid'
import { ProductService } from "../product.service";
import { Response } from "express";

@Controller('product')
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
    
}