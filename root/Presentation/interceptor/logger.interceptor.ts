import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const now = Date.now();
        const req = context.switchToHttp().getRequest();
        const method = req.method;
        const url = req.url;
        return next
            .handle()
            .pipe(
                tap(() =>
                    Logger.log(
                        `${method} ${url} ${Date.now() - now}msaaa`,
                        context.getClass().name,
                    ),
                ),
            );
    }
}