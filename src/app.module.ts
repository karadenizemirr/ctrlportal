import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { SettingsAdminModule } from './settings/admin/settings.admin.module';
import { APP_INTERCEPTOR, RouterModule } from '@nestjs/core';
import { ProductAdminModule } from './products/admin/product.admin.module';
import { CategoryModule } from './category/category.module';
import { CategoryAdminController } from './category/admin/category.admin.controller';
import { CategoryAdminModule } from './category/admin/category.admin.module';
import { DataInterceptor } from './interceptors/data.interceptors';
import { ProductModule } from './products/product.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    DatabaseModule,
    SettingsAdminModule,
    ProductAdminModule,
    CategoryAdminModule,
    RouterModule.register([
      {
        path: 'admin',
        module: SettingsAdminModule
      },
      {
        path: 'admin',
        module: ProductAdminModule
      },
      {
        path: 'admin',
        module: CategoryAdminModule
      }
    ]),
    ProductModule,
    CategoryModule,
    ContactModule
  ],
  controllers: [AppController],
  providers: [AppService,
  {
    provide:APP_INTERCEPTOR,
    useClass:DataInterceptor
  }],
  exports: []
})
export class AppModule {}
