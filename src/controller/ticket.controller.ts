import { inject, injectable } from "inversify";
import "reflect-metadata"
import { IService } from "../service/i.service";
import { ITYPES } from "../types/interface.types";
import { IController } from "./i.controller";

@injectable()
export class TicketController implements IController<any> {
    private service: IService<any>;
    public constructor(
        @inject(ITYPES.Service) service: IService<any>
    ) {
        this.service = service;
    }
    findOne(req: any, res: any, next: any): Promise<any> {
        console.log('Hello from ticket controller');
        
        const result = this.service.findOne("");
        return result;
    }
    findAll(req: any, res: any, next: any): Promise<any[]> {
        throw new Error("Method not implemented.");
    }
    find(req: any, res: any, next: any): Promise<any[]> {
        throw new Error("Method not implemented.");
    }
    create(req: any, res: any, next: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    update(req: any, res: any, next: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    delete(req: any, res: any, next: any): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}