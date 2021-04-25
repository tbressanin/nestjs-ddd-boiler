export interface IBaseService<T> {
    get: (id: string | number) => Promise<T>
    list: (filters?: any) => Promise<Array<T>>,
    create: (model: T) => Promise<T>,
    update: (model: T) => Promise<T>,
    delete: (id: string) => Promise<boolean>
}