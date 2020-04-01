/**
 * Represents ticket from Jira
 * @class
 */
class Ticket {
    /**
     * @constructor
     * @param {number} id id(number) of the ticket
     * @param {string} [name] Name of the ticket 
     * @param {string} [url] Url of the ticket
     * @param {array} [logs] Array of logs (<code>Log</code> class object), that are tracked in a ticket
     */
    constructor(id, name, url, logs) {
        this.id = id;

        //if inputs are passes - set
        //otherwise - empty strings
        this.name = name ? name : '';
        this.url = url ? url : '';

        // If logs are passes - set them. Empty array otherwise
        this.logs = logs ? logs : [];
    }

    /**
     * Adds log to the ticket
     * @param {Log} log Object of log class 
     */
    addLog(log) {
        this.logs.push(log);
    }

    /**
     * Deletes passed log from ticket
     * @param {Log} logToDelete 
     */
    deleteLog(logToDelete) {
        const indexOfLogToDelete = this.logs.findIndex(log => {
            log.id = logToDelete.id;
        });

        //deleting selected log from array
        this.logs.splice(indexOfLogToDelete, 1);
    }
}

module.exports = {
    Ticket
}