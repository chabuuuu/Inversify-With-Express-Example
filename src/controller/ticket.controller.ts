import { inject, injectable } from "inversify";
import "reflect-metadata"
import { IService } from "../service/base/i.service";
import { ITYPES } from "../types/interface.types";
import { IController } from "./base/i.controller";
import { BaseController } from "./base/base.controller";

@injectable()
export class TicketController extends BaseController{}