const { createHtmlElement, addNewChildToNode } = require('./../../services/domHelpers.js');
const { LogForm } = require('./../../views/TicketTracking/LogForm.js');
/**
 * Class for representing whole ticket in html (including logs)
 * @class
 */
class TicketForm {
    /**
     * @constructor
     * @param {Ticket} ticket Instance of Ticket class
     * @param {number} ticket.id
     * @param {string} ticket.name name of the Jira ticket
     * @param {string} ticket.url url to the Jira ticket
     * @param {array} ticket.logs Array of Log instances
     */
    constructor(ticket) {
        this.ticket = ticket;

        const { 
            ticketElement, 
            logFormsInstances
        } = this._createTicketForm();
        this.ticketForm = ticketElement;
        this.logForms = logFormsInstances;
    }

    /**
     * Creates <li> element, containing inputs for name, url and their labels
     * @returns {object} <li> js object with ticket's inputs, labels and logs elements
     * @returns {array} LogForm classes instances for data and elements access
     */
    _createTicketForm() {
        //initial <li> element for ticket
        const ticketElement = createHtmlElement('li', {
            id: this.ticket.id.toString()
        });

        //creating <label> and <input> tags for name & url
        const childLabelsAndInputsParams = [
            { tag: 'label', options: { innerText: 'Name: ' }},
            { tag: 'input', options: { type: 'text: ', oninput: this._changeTicketName }},
            { tag: 'label', options: { innerText: 'URL: ' }},
            { tag: 'input', options: { type: 'text: ', oninput: this._changeTicketUrl }}
        ];
        childLabelsAndInputsParams.forEach(elementParams => {
            addNewChildToNode(ticketElement, elementParams.tag, elementParams.options)
        });

        //creating log HTML forms and putting them to ticket element
        // array of LogForm instances
        const logFormsInstances = this.logs.map(log => {
            return new LogForm(log);
        }); 
        //array of log form HTML elements
        const childLogsElements = logFormsInstances.map(logFormInstance => { 
            return logFormInstance.logForm;
        });

        const logsListElement = createHtmlElement('ol');
        logsListElement.append(...childLogsElements);
        ticketElement.append(logsListElement);

        //logsFormInstances - for saving forms in this in constr
        return {
            ticketElement,
            logFormsInstances
        };
    }

    /**
     * Changes ticket name when input is made
     */
    _changeTicketName() {
        //1 is index of name input in ticket form children
        const ticketNameInput = this.ticketForm.children[1];
        this.ticket.name = ticketNameInput.value;
    }

    /**
     * Changes ticket url when input is made
     */
    _changeTicketUrl() {
        //3 is index of URL input in ticket form children
        const ticketUrlInput = this.ticketForm.children[3];
        this.ticket.url = ticketUrlInput.value;
    }
    
    /**
     * Adds new log form to the ticket
     * @param {string} description 
     * @param {string} time 
     */
    _addLogForm(description, time) {
        //!!! fix id issue
        const newLogForm = new LogForm(1, description, time);
        this.ticket.addLog(newLogForm.log);
        this.logForms.push(newLogForm);

        //4 is index of logs list in ticket form
        const ticketLogsList = this.ticketForm.children[4];
        ticketLogsList.append(newLogForm.logForm);
    }

    /**
     * Removes ticket form list element from html
     */
    _deleteTicketForm() {
        if(this.ticketForm) {
            this.ticketForm.remove();
        } else {
            throw Error('Error while removing ticket form: No Form Found');
        }
    }
}

module.exports = {
    TicketForm
}