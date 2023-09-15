import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import axios from "axios";
import { Google } from "src/entity/google.entity";
import { Repository } from "typeorm";


@Injectable()
export class GoogleService {
    constructor(
        @Inject('GOOGLE_REPOSITORY') private googleRepository: Repository<Google>
    ) {}

    async search_company(query:string){
        try{
            const base_url = "https://local-business-data.p.rapidapi.com/search"
            const params = {
                query: query,
                limit: 500,
                verified: true
            }
            const headers= {
                'X-RapidAPI-Key': '507e4109a3msh25f08b98981bc80p1c4617jsn1377f3c2656d',
                'X-RapidAPI-Host': 'local-business-data.p.rapidapi.com'
            }
            
            const options = {
                method: 'GET',
                url: base_url,
                params: params,
                headers: headers
            }

            const req = await axios.request(options)
            const data = req.data.data

            for (const d of data){
                const control = await this.googleRepository.findOne(
                    {
                        where:{
                            name: d['name']
                        }
                    }
                )

                if (!control){
                    const google = new Google()
                    google.name = d['name'] || ''
                    google.phone_number = d['phone_number'] || ''
                    google.full_address = d['full_address'] || ''
                    google.raiting = d['rating'] || 0
                    google.website = d['website'] || ''
                    google.type = d['type'] || ''
                    google.district = d['district'] || ''
                    google.street_address = d['street_address'] || ''
                    google.city = d['city'] || ''
                    google.country = d['country'] || ''
    
                    await this.googleRepository.save(google)
                }
            }

            return true
            
        }catch(err){
            console.log(err)
            throw new HttpException('Company search error', HttpStatus.BAD_GATEWAY)
        }
    }

    async get_all(){
        try{
            const result = await this.googleRepository.find()
            return result
        }catch(err){
            console.log(err)
            throw new HttpException('Get all company error', HttpStatus.BAD_GATEWAY)
        }
    }
}