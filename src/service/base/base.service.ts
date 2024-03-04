import { inject, injectable } from "inversify";
import { IService } from "./i.service";
import { IRepository } from "../../reposiroty/base/base.repository.ts/i.repository";
import { ITYPES } from "../../types/interface.types";

@injectable()
export class BaseService implements IService<any>{
    protected repository: IRepository<any>;
    public constructor(@inject(ITYPES.Repository) repository: IRepository<any>) {
        this.repository = repository;
    }
    create(item: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    update(id: string, item: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    find(item: any): Promise<any[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: string): Promise<any> {
        console.log('Hello from ticket service');
        const result = this.repository.findOne(id);
        return result;
    }
    findAll(): Promise<any[]> {
        throw new Error("Method not implemented.");
    }
}