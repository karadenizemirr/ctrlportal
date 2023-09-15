import { Body, Controller, Get, Post, Render, Res } from "@nestjs/common";
import { GoogleService } from "./google.service";
import { Response } from "express";

@Controller('google')
export class GoogleControler {
    constructor(private googleService: GoogleService) {}

    @Get()
    @Render('admin/google')
    async get_google(){
        return {
            title: 'Company Search'
        }
    }

    @Post()
    async post_google(@Body() data:any, @Res() res:Response){
        const result = await this.googleService.search_company(data.query)

        if (result){
            res.redirect(302, '/admin/google/table')
        }

        res.redirect(302, '/admin/google')
    }

    @Get('table')
    @Render('admin/google_table')
    async get_table(){
        const data = await this.googleService.get_all()
        return {
            title: 'Company List',
            data: data
        }
    }
}