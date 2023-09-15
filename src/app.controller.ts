import { Controller, Get, Render, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './guard/auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('home')
  getHello() {
    return {
      title: 'Home Page'
    }
  }

  @Get('/admin')
  @Render('admin/home')
  @UseGuards(AuthGuard)
  async get_admin(){
    return {
      title: 'Admin Page'
    }
  }
}
