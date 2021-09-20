import { LightningElement } from 'lwc';

export default class Methods extends LightningElement {
    /** TWO WAY DATA-BINDING */
    title = 'Salesforce Lightning Developer';

    /** METHODS */
   changeHandler(event){
        this.title = event.target.value;
    }
}