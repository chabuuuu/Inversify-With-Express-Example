import { inject, injectable } from "inversify";
import { IRepository } from "./base/base.repository.ts/i.repository";
import "reflect-metadata"
import { BaseRepository } from "./base/base.repository.ts/base.repository";
import { ITYPES } from "../types/interface.types";
import { Model } from "../models/model";

@injectable()
export class TicketRepository extends BaseRepository{
    constructor(@inject(ITYPES.Model) model : Model) {
        super(model.ticket);
    }
}