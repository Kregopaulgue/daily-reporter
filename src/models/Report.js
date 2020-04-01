/**
 * State of the report, containing all tickets and plans
 * @class
 */
class Report {
    /**
     * @constructor
     * @param {array} [tickets] 
     * @param {array} [plansToDo] 
     */
    constructor(tickets, plansToDo) {
        //If content is passed - set
        //Empty arrays otherwise
        this.tickets = tickets ? tickets : [];
        this.plansToDo = plansToDo ? plansToDo : [];
    }

    /**
     * Adds ticket to the report
     * @param {Ticket} ticket object of the Ticket class 
     */
    addTicket(ticket) {
        this.tickets.push(ticket);
    }
    /**
     * Deletes ticket from the report
     * @param {Ticket} ticketToDelete object of the Ticket class 
     */
    deleteTicket(ticketToDelete) {
        const indexOfTicketToDelete = this.tickets.findIndex(ticket => {
            return ticket.id === ticketToDelete.id;
        });
        //removes ticket from array
        this.tickets.splice(indexOfTicketToDelete, 1);
    }

    /**
     * Adds plan to do to the report
     * @param {PlanToDo} planToDo 
     */
    addPlanToDo(planToDo) {
        this.plansToDo.push(planToDo);
    }
    /**
     * Deletes plan to do from the report
     * @param {PlanToDo} planToDoToDelete 
     */
    deletePlanToDo(planToDoToDelete) {
        const indexOfPlanToDoToDelete = this.plansToDo.findIndex(planToDo => {
            return planToDo.id === planToDoToDelete.id;
        });
        //removes ticket from array
        this.plansToDo.splice(indexOfPlanToDoToDelete, 1);
    }
}