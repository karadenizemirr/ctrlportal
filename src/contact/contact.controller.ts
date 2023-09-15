import { Body, Controller, Get, Post, Render } from "@nestjs/common";

@Controller('contact')
export class ContactController {
    constructor() {}

    @Get()
    @Render('contact')
    async get_contact(){
        return {
            title: 'Contact'
        }
    }

    @Post()
    async post_contat(@Body() data:any){
    }

    
}