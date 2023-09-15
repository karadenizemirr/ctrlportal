import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import {secureSession} from 'fastify-secure-session'

@Injectable()
export class LoginInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const req = context.switchToHttp().getRequest()
        const res = context.switchToHttp().getResponse()
        const session = req.session as secureSession
        let isLogin = false

        if (session && session['token']){
            isLogin = true
        }
        res.locals.isLogin = isLogin
        return next.handle()
    }
}