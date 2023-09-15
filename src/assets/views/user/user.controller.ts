import { Controller, Get } from "@nestjs/common";

@Controller()
export class UserController {
    constructor() {}

    @Get()
    async login(){
        return {
            title: 'Login Page'
        }
    }
}