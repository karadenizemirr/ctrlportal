import { Body, Controller, Get, Post, Render, Res, Session, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import * as secureSession from '@fastify/secure-session'
import { Response } from "express";
import { AuthGuard } from "src/guard/auth.guard";

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get('login')
    @Render('admin/login')
    async login(){
        return {
            title: 'Login Page'
        }
    }

    @Post('login')
    async post_login(@Body() data:any, @Session() session:secureSession.Session, @Res() res:Response){
        const login = await this.userService.login(data)
        session.set('token', login)
        res.redirect(302, '/admin')
    }

    @Post('register')
    @UseGuards(AuthGuard)
    async post_register(@Body() data:any){
        const register = await this.userService.register(data)
        return register
    }

    @Get('logout')
    async get_logout(@Session() session:secureSession.Session, @Res() res:Response){
        session.delete()
        res.redirect(302, '/')
    }
}