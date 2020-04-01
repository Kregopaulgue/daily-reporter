/**
 * Class for manipulating HTML forms of plan to do
 * @class
 */
class PlanToDoForm {
    /**
     * @constructor
     * @param {PlanToDo} planToDo object of plan to connect form with
     * @param {number} planToDo.id
     * @param {string} planToDo.planToDo
     */
    constructor(planToDo) {
        this.planToDo = planToDo;
        this.planToDoForm = this._createPlanToDoForm();
    }

    /**
     * Creates <li> element, containing input for the plan and its label
     * @returns {object} <li> js object with plan's input and label
     */
    _createPlanToDoForm() {
        //creating Plan to do input
        const planToDoInput = document.createElement('input');
        planToDoInput.type = 'text';
        planToDoInput.value = this.planToDo.planToDo;
        planToDoInput.id = this.planToDo.id;

        planToDoInput.addEventListener('input', this._changePlanToDo)
        
        //creating Label for the input
        const labelForPlanToDoInput = document.createElement('label');
        labelForPlanToDoInput.innerText = 'Plan:';
        labelForPlanToDoInput.htmlFor = planToDoInput.id;

        //creating final <li> element
        const planToDoListElement = document.createElement('li');
        planToDoListElement.append(labelForPlanToDoInput, planToDoInput);

        return planToDoListElement;
    }

    _changePlanToDo() {
        //this.planToDoForm.children[1] is <input> tag
        const planToDoFormInput = this.planToDoForm.children[1];
        this.planToDo.planToDo = planToDoFormInput.value;
    }

    /**
     * Removes plan to do form from html
     */
    _deletePlanToDoForm() {
        if(this.planToDoForm) {
            this.planToDoForm.remove();
        } else {
            throw Error('Error while removing plan form: No Form Found');
        }
    }
}