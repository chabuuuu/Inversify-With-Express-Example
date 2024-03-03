import ticketController from "../container/ticket.container";

export function route (app : any){
    app.get('/ticket', ticketController.findOne.bind(ticketController));
}