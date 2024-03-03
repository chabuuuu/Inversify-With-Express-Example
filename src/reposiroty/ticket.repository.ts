import { injectable } from "inversify";
import { IRepository } from "./i.repository";
import "reflect-metadata"
@injectable()
export class TicketRepository implements IRepository<any>{
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
        const res: any = "Hello World!";
        console.log('Hello from ticket repository');
        
        return res
    }
    findAll(): Promise<any[]> {
        throw new Error("Method not implemented.");
    }

}