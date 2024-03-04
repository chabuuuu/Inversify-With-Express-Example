export interface IController<T> {
    findOne(req: any, res: any, next: any): Promise<T>;
    findAll(req: any, res: any, next: any): Promise<T[]>;
    find(req: any, res: any, next: any): Promise<T[]>;
    create(req: any, res: any, next: any): Promise<T>;
    update(req: any, res: any, next: any): Promise<T>;
    delete(req: any, res: any, next: any): Promise<boolean>;
}