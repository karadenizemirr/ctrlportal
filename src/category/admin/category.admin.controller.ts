import { Body, Controller, Get, Param, Post, Render, Res } from "@nestjs/common";
import { Response } from "express";
import { CategoryService } from "../category.service";

@Controller('category')
export class CategoryAdminController {
    constructor(private categoryService: CategoryService) { }

    @Get()
    @Render('admin/category')
    async get_category() {
        const categories = await this.categoryService.get_all_category()

        return {
            title: 'Kategoriler',
            categories: categories
        }
    }

    @Post()
    async post_category(@Body() body: any, @Res() res: Response) {
        const save = await this.categoryService.add_category(body)

        res.status(200).send('success')
    }

    @Get('delete/:id')
    async delete_category(@Param('id') id:number, @Res() res:Response){
        const remove = await this.categoryService.delete_category(id)

        res.redirect(302, '/admin/category')
    }

    @Post('update/:id')
    async update_category(@Param('id') id:number, @Body() body:any, @Res() res:Response){
        const update = await this.categoryService.update_category(id, body)

        res.redirect(302, '/admin/category')
    }
}