import { Module } from "@nestjs/common";
import { SettingsAdminController } from "./settings.admin.controller";
import { settingsProvider } from "src/provider/settings.provider";
import { DatabaseModule } from "src/database/database.module";
import { SettingsService } from "../settings.service";

@Module({
    imports: [DatabaseModule],
    controllers: [SettingsAdminController],
    providers: [
        ...settingsProvider,
        SettingsService
    ],
    exports: [SettingsService]
})
export class SettingsAdminModule {}
