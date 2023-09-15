import { Global, Module } from '@nestjs/common';
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
import { UserModule } from './user/user.module';
import { JwtService } from './customService/jwt.service';
import { LoginInterceptor } from './interceptors/login.interceptors';
import { GoogleModule } from './google/google.module';

@Global()
@Module({
  imports: [
    DatabaseModule,
    SettingsAdminModule,
    ProductAdminModule,
    CategoryAdminModule,
    GoogleModule,
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
      },
      {
        path:'admin',
        module: UserModule
      },{
        path:'admin',
        module: GoogleModule
      }
    ]),
    ProductModule,
    CategoryModule,
    ContactModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService,
  {
    provide:APP_INTERCEPTOR,
    useClass:DataInterceptor
  },
  {
    provide: APP_INTERCEPTOR,
    useClass:LoginInterceptor
  },
  JwtService
],
  exports: [JwtService]
})
export class AppModule {}
