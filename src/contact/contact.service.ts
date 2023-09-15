import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { Contact } from "src/entity/contact.entity";
import { Repository } from "typeorm";

@Injectable()
export class ContactService {
    constructor(
        @Inject('CONTACT_REPOSITORY') private contactRepository: Repository<Contact>
    ) {}


    async get_contact(data:any){
        try{
            const result = await this.contactRepository.save(data)
            return result

        }catch(err){
            throw new HttpException('Contact error', HttpStatus.BAD_GATEWAY)
        }
    }
}