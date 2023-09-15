import { Module } from "@nestjs/common";
import { ContactController } from "./contact.controller";
import { ContactService } from "./contact.service";
import { ContactAdminModule } from "./admin/contact.admin.module";
import { DatabaseModule } from "src/database/database.module";
import { contactProvider } from "src/provider/contact.provider";

@Module({
    imports:[DatabaseModule,ContactAdminModule],
    controllers: [ContactController],
    providers: [ContactService, ...contactProvider]
})
export class ContactModule {
    
}