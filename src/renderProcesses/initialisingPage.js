const { ReportForm } = require('./../views/ReportForm.js');
const { aggregateData } = require('./../services/dataAggregator.js');

const mainReportForm = new ReportForm();
const body = document.querySelector('body');

body.append(mainReportForm.reportForm);

const showInfoButton = document.getElementById("showInfoButton");
showInfoButton.addEventListener('click', event => {
    aggregateData(mainReportForm);
});
