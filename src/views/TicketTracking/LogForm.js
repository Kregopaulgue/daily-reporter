const { createHtmlElement, addNewChildToNode } = require('./../../services/domHelpers.js');
/**
 * Class for manipulating logs' HTML forms
 * @class
 */
class LogForm {
    /**
     * @constructor
     * @param {Log} log instance of Log class
     * @param {number} log.id
     * @param {string} log.description description of the log
     * @param {string} log.time tracked time of the log
     */
    constructor(log) {
        this.log = log;
        this.logForm = this._createLogForm();
    }

    /**
     * Creates <li> element, containing inputs for description, time and their labels
     * @returns {object} <li> js object with log's inputs and labels
     */
    _createLogForm() {
        const logListElement = createHtmlElement('li'. {
            id: this.log.id.toString()
        });

        const childElementsParams = [
            { tag: 'label', options: { innerText: 'Description: ' }},
            { tag: 'input', options: { type: 'text: ', oninput: this._changeLogDescription }},
            { tag: 'label', options: { innerText: 'Time: ' }},
            { tag: 'input', options: { type: 'text: ', oninput: this._changeLogTime }}
        ]

        childElementsParams.forEach(elementParams => {
            addNewChildToNode(logListElement, elementParams.tag, elementParams.options)
        });

        return logListElement;
    }

    /**
     * Changes log description when input is made
     */
    _changeLogDescription() {
        //1 is index of time input in log form children
        const logDescriptionInput = this.logForm.children[1];
        this.log.description = logDescriptionInput.value;
    }
    /**
     * Changes log time when input is made
     */
    _changeLogTime() {
        //3 is index of time input in log form children
        const logTimeInput = this.logForm.children[3];
        this.log.time = logTimeInput.value;
    }

    /**
     * Removes log form list element from html
     */
    _deletePlanToDoForm() {
        if(this.logForm) {
            this.logForm.remove();
        } else {
            throw Error('Error while removing log form: No Form Found');
        }
    }
}