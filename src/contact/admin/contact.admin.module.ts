import { Module } from "@nestjs/common";
import { ContactAdminController } from "./contact.admin.controller";
import { ContactService } from "../contact.service";
import { DatabaseModule } from "src/database/database.module";
import { contactProvider } from "src/provider/contact.provider";

@Module({
    imports:[DatabaseModule],
    controllers: [ContactAdminController],
    providers: [
        ...contactProvider,
        ContactService
    ],
    exports: [ContactService]
})
export class ContactAdminModule {}