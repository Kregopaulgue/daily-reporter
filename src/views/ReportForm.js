const { createHtmlElement, addNewChildToNode } = require('./../services/domHelpers.js');
const { PlanToDoForm } = require('./PlanToDoForm.js');
const { TicketForm } = require('./TicketTracking/TicketForm.js');

const { Ticket } = require('./../models/TicketTracking/Ticket');
const { PlanToDo } = require('./../models/PlanToDo.js');


const TICKETS_LIST_ID = "ticketsListId",
    PLANS_LIST_ID = "plansListId",
    START_TICKET_ID = 1,
    START_PLAN_TO_DO_ID = 1;
/**
 * Class representing whole report html
 * @class
 */
class ReportForm {
    /**
     * @constructor
     * @param {array} ticketForms array of TicketForm instances
     * @param {array} planToDoForms array of PlanToDoForms instances 
     */
    constructor(ticketForms, planToDoForms) {
        this.ticketForms = ticketForms;
        this.planToDoForms = planToDoForms;

        this.reportForm = this._initializeReport();

        this.currentTicketId = this.ticketForms[this.ticketForms.length - 1].ticket.id;
        this.currentPlantToDoId = this.planToDoForms[this.planToDoForms.length - 1].planToDo.id;
    }

    /**
     * initialising starting div report
     * @returns {object} <div> element with report
     */
    _initializeReport() {
        const reportElement = createHtmlElement('div');
        const childElementsParams = [
            { tag: 'label', options: { innerText: 'Tracked Time: ' }},
            { tag: 'ol', options: { id: TICKETS_LIST_ID }},
            { tag: 'button', options: { innerText: 'Add Ticket', onclick: this._addTicketForm }},

            { tag: 'label', options: { innerText: 'Plans For The Next Day: ' }},
            { tag: 'ol', options: { id: PLANS_LIST_ID }},
            { tag: 'button', options: { innerText: 'Add Plan', onclick: this._addPlanToDoForm }}
        ];

        reportElement.append(...childElementsParams);

        const firstTicket = new Ticket(START_TICKET_ID);
        const initialisingTicketForm = new TicketForm(firstTicket);
        //accessing tickets html list
        this.ticketForms.push(initialisingTicketForm);
        reportElement.children[1].append(initialisingTicketForm.ticketForm);

        const firstPlanToDo = new PlanToDo(START_PLAN_TO_DO_ID);
        const initialisingPlanForm = new PlanToDoForm(firstPlanToDo);
        //accessing plans to do html list
        this.planToDoForms.push(initialisingPlanForm);
        reportElement.children[4].append(initialisingPlanForm);

        return reportElement;
    }

    /**
     * Adding ticket form to the report
     */
    _addTicketForm() {
        const newTicket = new Ticket(this.currentTicketId + 1);
        const newTicketForm = new TicketForm(newTicket);

        //accessing tickets html list (1 - index)
        this.ticketForms.push(newTicketForm);
        this.reportForm.children[1].append(newTicketForm.ticketForm);

        this.currentTicketId = newTicket.id;
    }

    /**
     * Adding plan to do form to the report
     */
    _addPlanToDoForm() {
        const newPlanToDo = new Ticket(this.currentPlantToDoId + 1);
        const newPlanToDoForm = new PlanToDoForm(newPlanToDo);

        //accessing tickets html list (4 - index)
        this.planToDoForms.push(newPlanToDoForm);
        this.reportForm.children[4].append(newPlanToDoForm.planToDoForm);

        this.currentPlantToDoId = newPlanToDo.id;
    }
}