import { UseFilters, UseInterceptors } from "@nestjs/common";
import { HttpExceptionFilter } from "../filters/exception.filter";
import { LoggerInterceptor } from "../interceptor/logger.interceptor";

@UseInterceptors(new LoggerInterceptor())
@UseFilters(new HttpExceptionFilter())

export class BaseController<T> {
    constructor() { }
}