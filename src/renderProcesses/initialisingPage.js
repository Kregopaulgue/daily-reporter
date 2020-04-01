const { ReportForm } = require('./../views/ReportForm.js');
const { ReportFile } = require('./../services/reportFile.js');

const mainReportForm = new ReportForm();
const body = document.querySelector('body');

body.append(mainReportForm.reportForm);

const showInfoButton = document.getElementById("showInfoButton");
showInfoButton.addEventListener('click', event => {
    ReportFile.formatInfoStringToWrite(mainReportForm);
});
