
export interface IBaseRepository<T> {
    saveEntity: (obj: T) => Promise<T>;
    getEntity: (filters: { id: string }) => Promise<T>;
    updateEntity: (obj: T) => Promise<T>;
    deleteEntity: (id: string) => Promise<boolean>;
}