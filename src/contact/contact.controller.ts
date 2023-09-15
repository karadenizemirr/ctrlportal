import { Body, Controller, Get, Post, Render } from "@nestjs/common";
import { ContactService } from "./contact.service";

@Controller('contact')
export class ContactController {
    constructor(private contactService: ContactService) {}

    @Get()
    @Render('contact')
    async get_contact(){
        return {
            title: 'Contact'
        }
    }

    @Post()
    async post_contat(@Body() data:any){
        const result = await this.contactService.get_contact(data)
        return result
    }

    
}