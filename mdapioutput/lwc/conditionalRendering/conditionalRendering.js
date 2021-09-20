import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
/** CONDITIONAL RENDERING */

    isShow = false;

    answer;

    handleClick() {
        this.isShow = true;
    }

    // Capture answer and set to lower case
    changeHandler(event) {
        this.answer = event.target.value.toLowerCase();
    }

    // if answer is correct, disply hiddent text
    get riddleMethod() {
        return this.answer === 'newspaper';
        }

    // Note on falsey values
    // x = 0, false, null, undefined, ""
    // Falsey values automatically set template if:true method to false.

}