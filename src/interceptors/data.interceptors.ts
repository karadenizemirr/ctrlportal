import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, map } from "rxjs";
import { CategoryService } from "src/category/category.service";
import { SettingsService } from "src/settings/settings.service";

@Injectable()
export class DataInterceptor implements NestInterceptor {
    constructor(private categoryService: CategoryService, private settingsService: SettingsService) { }
    async intercept(context: ExecutionContext, next: CallHandler<any>): Promise<Observable<any>> {
        const categories = await this.categoryService.get_all_category();
        const settings = await this.settingsService.get_settings()
        const response = context.switchToHttp().getResponse();

        if (!response.locals.categories || !response.locals.settings) {
            response.locals.categories = {};
            response.locals.settings = {};
        }
    
        response.locals.categories = categories;
        response.locals.settings = settings[0]

        return next.handle();
    }
}