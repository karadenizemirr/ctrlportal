import { Injectable } from "@nestjs/common";
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtService {
    private readonly secretKey = "ctrlportal"

    generate_token(payload:any){
        return jwt.sign(payload,this.secretKey,{expiresIn:'1d'})
    }

    verify_token(token:string){
        return jwt.verify(token,this.secretKey)
    }
}