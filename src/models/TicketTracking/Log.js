/**
 * Loged description/time entry for a ticket
 * @class
 */
class Log {
    /**
     * @constructor
     * @param {number} id Id of the log in a ticket 
     * @param {string} [description] Content of a jira log 
     * @param {string} [time] Time being loged in format 1h 1m 1s
     */
    constructor(id, description, time) {
        this.id = id;
        
        //if these arguments are passed - set
        //empty strings otherwise
        this.description = description ? description : '';
        this.time = time ? time : '';
    }
}