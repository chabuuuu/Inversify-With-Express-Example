import { inject, injectable } from "inversify";
import { IRepository } from "../reposiroty/base/base.repository.ts/i.repository";
import { IService } from "./base/i.service";
import "reflect-metadata"
import { ITYPES } from "../types/interface.types";
import { BaseService } from "./base/base.service";

@injectable()
export class TicketService extends BaseService{
    // findOne(id: string): Promise<any> {
    //     console.log('Hello from ticket service');
        
    //     const result = this.repository.findOne(id);
    //     return result;
    // }
}