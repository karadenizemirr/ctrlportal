import { Module } from "@nestjs/common";
import { GoogleControler } from "./google.controller";
import { GoogleService } from "./google.service";
import { DatabaseModule } from "src/database/database.module";
import { googleProvider } from "src/provider/google.provider";

@Module({
    imports:[DatabaseModule],
    controllers: [GoogleControler],
    providers: [GoogleService, ...googleProvider]
})
export class GoogleModule {
    constructor() {}
}