import { Body, Controller, Get, Post, Render, Res, UseGuards } from "@nestjs/common";
import { SettingsService } from "../settings.service";
import { Response } from "express";
import { AuthGuard } from "src/guard/auth.guard";


@Controller('settings')
@UseGuards(AuthGuard)
export class SettingsAdminController {
    constructor(private settingsService: SettingsService) {}


    @Get()
    @Render('admin/settings')
    async get_settings(){
        const settings = await this.settingsService.get_settings()
        return {
            title: 'Ayarlar',
            settings: settings[0]
        }
    }

    @Post()
    async post_settings(@Body() body:any, @Res() res:Response){
        const result = await this.settingsService.create_settings(body)
        res.redirect(302, '/admin/settings')

    }
}