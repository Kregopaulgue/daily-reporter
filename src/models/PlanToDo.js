/**
 * @class
 */
class PlanToDo {
    /**
     * @constructor
     * @param {number} id Id of the plan inside a ticket
     * @param {string} [planToDo]
     */
    constructor(id, planToDo) {
        this.id = id;

        //if no plan to do is passed - set empty string
        this.planToDo = planToDo ? planToDo : '';
    }
}