import { inject, injectable } from "inversify";
import { IController } from "./i.controller";
import { IService } from "../../service/base/i.service";
import { ITYPES } from "../../types/interface.types";
import "reflect-metadata"

@injectable()
export class BaseController implements IController<any>{
    protected service: IService<any>;
    public constructor(
        @inject(ITYPES.Service) service: IService<any>
    ) {
        this.service = service;
    }
    async findOne(req: any, res: any, next: any): Promise<any> {
        console.log('Hello from ticket controller');
        const result = this.service.findOne("");
        res.send(result);
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