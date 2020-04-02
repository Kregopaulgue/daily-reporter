const { ReportForm } = require('./../views/ReportForm.js');
const { ReportFile } = require('./../services/reportFile.js');
const { ProjectApi } = require('./../api/ProjectApi.js');

const mainReportForm = new ReportForm();
const body = document.querySelector('body');

body.append(mainReportForm.reportForm);

const showInfoButton = document.getElementById("showInfoButton");
showInfoButton.addEventListener('click', event => {
    const reportTextToSave = ReportFile.formatInfoStringToWrite(mainReportForm);
    ReportFile.writeReportToFile(reportTextToSave);
    ProjectApi.getAllProjects();
});
