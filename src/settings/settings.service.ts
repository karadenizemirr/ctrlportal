import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { Settings } from "src/entity/settings.entity";
import { Repository } from "typeorm";

@Injectable()
export class SettingsService {
    constructor(
        @Inject('SETTINGS_REPOSITORY') private settingsRepository: Repository<Settings>
    ) {}

    async create_settings(data:any){
        try{
            if (data && data.id.length > 0){
                const update = await this.settingsRepository.update(data.id, data)
                return update
            }
            delete data.id
            const save = await this.settingsRepository.save(data)
            return save
        }catch(err){
            console.log(err)
            throw new HttpException('Create settings error', HttpStatus.BAD_REQUEST)
        }
    }

    async get_settings(){
        try{

            const settings = await this.settingsRepository.find()
            return settings

        }catch(err){
            throw new HttpException('Get settings error', HttpStatus.BAD_REQUEST)
        }
    }
}