import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { User } from "src/entity/user.entity";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt'
import { JwtService } from "src/customService/jwt.service";

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY') private userRepository: Repository<User>,
        private jwtService: JwtService
    ) {}

    async register(data:any){
        try{
            const password = await bcrypt.hash(data.password, 5)
            data.password = password
            const user = await this.userRepository.save(data)
            return true
        }catch(err){
            
            throw new HttpException('Register error', HttpStatus.BAD_REQUEST)
        }
    }

    async login(data:any){
        try{
            const control = await this.userRepository.findOne({
                where: {
                    email: data.email
                }
            })

            if (control){
                const password_control = await bcrypt.compare(data.password, control.password)

                if (password_control){
                    const token = this.jwtService.generate_token({id: data.id})
                    return token
                }
            }
        }catch(err){
            throw new HttpException('Login error', HttpStatus.BAD_REQUEST)
        }
    }
}