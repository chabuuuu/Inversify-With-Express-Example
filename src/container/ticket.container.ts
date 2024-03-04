import { Container } from "inversify";
import { ITYPES } from "../types/interface.types";
import { IService } from "../service/base/i.service";
import { TicketService } from "../service/ticket.service";
import { IRepository } from "../reposiroty/base/base.repository.ts/i.repository";
import { TicketRepository } from "../reposiroty/ticket.repository";
import { IController } from "../controller/base/i.controller";
import { TicketController } from "../controller/ticket.controller";
import { Model } from "../models/model";

const ticketContainer = new Container();
ticketContainer.bind<IService<any>>(ITYPES.Service).to(TicketService);
ticketContainer.bind<IRepository<any>>(ITYPES.Repository).to(TicketRepository);
ticketContainer.bind<IController<any>>(ITYPES.Controller).to(TicketController);
ticketContainer.bind<Model>(ITYPES.Model).to(Model);
const ticketController = ticketContainer.get<IController<any>>(ITYPES.Controller);
export default ticketController;
