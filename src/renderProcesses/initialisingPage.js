const { ReportForm } = require('./../views/ReportForm.js');

const mainReportForm = new ReportForm();
const body = document.querySelector('body');

body.append(mainReportForm.reportForm);
