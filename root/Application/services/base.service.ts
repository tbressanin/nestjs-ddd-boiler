import { plainToClass } from 'class-transformer';

export class BaseService<E, M> {

    constructor(protected m: new (value: Partial<M>) => M) { }
    private transform(o: (E | & M) | & (E[] | & M[])) {
        const result = plainToClass(this.m, o, {
            ignoreDecorators: false,
            strategy: 'exposeAll'
        });
        return result;
    }

    public toModel(e: E | & E[]) {
        return this.transform(e) as M & M[]
    }

    public toEntity(m: M | & M[]) {
        return this.transform(m) as M & M[]
    }
}
