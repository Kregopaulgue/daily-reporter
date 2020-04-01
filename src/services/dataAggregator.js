/**
 * 
 * @param {ReportForm} reportForm instance of ReportForm class 
 */
function aggregateData(reportForm) {
    const allTickets = reportForm.ticketForms.map(ticketForm => {
        return ticketForm.ticket;
    });
    const allPlansToDo = reportForm.planToDoForms.map(planToDoForm => {
        return planToDoForm.planToDo;
    });

    console.log(allTickets);
    console.log(allPlansToDo);
    console.log('For test');
}

module.exports = {
    aggregateData
}