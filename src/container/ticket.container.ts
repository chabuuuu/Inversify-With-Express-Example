import { Container } from "inversify";
import { ITYPES } from "../types/interface.types";
import { IService } from "../service/i.service";
import { TicketService } from "../service/ticket.service";
import { IRepository } from "../reposiroty/i.repository";
import { TicketRepository } from "../reposiroty/ticket.repository";
import { IController } from "../controller/i.controller";
import { TicketController } from "../controller/ticket.controller";

const ticketContainer = new Container();
ticketContainer.bind<IService<any>>(ITYPES.Service).to(TicketService);
ticketContainer.bind<IRepository<any>>(ITYPES.Repository).to(TicketRepository);
ticketContainer.bind<IController<any>>(ITYPES.Controller).to(TicketController);
const ticketController = ticketContainer.get<IController<any>>(ITYPES.Controller);
export default ticketController;
