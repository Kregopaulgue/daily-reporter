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
        //remove ticket from array
        this.tickets.splice(indexOfTicketToDelete, 1);
    }
}