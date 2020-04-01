const fs = require('fs');
const { aggregateData } = require('./dataAggregator.js');
/**
 * Responsible for writing info from forms to the document
 * @class
 */
class ReportFile {
    /**
     * Prepares data string to put it in file
     * @param {ReportForm} reportForm object of ReportForm class 
     */
    static formatInfoStringToWrite(reportForm) {
        const data = aggregateData(reportForm);

        let resultText = 'Date: ' + (new Date()).toString() + '\n';

        const offsetSpace = '  '; //2 spaces
        data.tickets.forEach((ticket, index) => {
            let ticketText = '';

            const ticketOrderNumber = index + 1;
            ticketText =  ticketOrderNumber + '.Name: ' + ticket.name + '\n';
            ticketText += offsetSpace + 'URL: ' + ticket.url + '\n'
            ticketText += offsetSpace + 'Logs:\n';
            ticketText += ReportFile._formatLogsListIntoText(ticket.logs) + '\n';

            resultText += ticketText;
        });

        const planText = this._formatPlansListIntoText(data.plans)
        resultText += planText;

        return resultText;
    }

    /**
     * Formats Log objects array into string to be put in file
     * @param {array} logs array of logs (Log object) 
     */
    static _formatLogsListIntoText(logs) {
        let logsText = '';
        const offsetWithIndex = '   ' // 3 spaces
        const offsetWithoutIndex = '      '; //6 spaces
        logs.forEach((log, index) => {
            const logOrderNumber = index + 1;
            logsText += offsetWithIndex + logOrderNumber + '. Description:\n'
            logsText += offsetWithoutIndex + log.description + '\n';

            logsText += offsetWithoutIndex + 'Time: '
            logsText += log.time + '\n';
        });
        return logsText;
    }

    /**
     * Formats plans string
     * @param {array} plans array of PlanToDo objects 
     */
    static _formatPlansListIntoText(plans) {
        let planText = '\nPlans To Do: \n';
        plans.forEach((plan, index) => {
            const planOrderNumber = index + 1;
            planText += ' ' + planOrderNumber + '. ' + plan.planToDo + '\n';
        });
        return planText;
    }
}

module.exports = {
    ReportFile
}