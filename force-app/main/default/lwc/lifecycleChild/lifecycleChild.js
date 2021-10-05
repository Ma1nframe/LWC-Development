import { LightningElement } from 'lwc';

export default class LifecycleChild extends LightningElement {

    constructor() {
        super()
        // Can't use querySelector yet because html is not yet rendered. We can only use this.template to add something likde a listener.
        // this.template.addEventListener('mouseover' function(){})
        console.log('Child constructor() called');
    }

    connectedCallback() {
        // Used to fetch data on page from seerver while component loads
        // Calls to Apex can be made here
        console.log('Child connectedCallback() called');
    }

    renderedCallback() {
        console.log('Child renderedCallback() called');
    }

    // clickHandler() {
    //    let fooBar = this.template.querySelector('.foo');
    //    fooBar.innerHTML = "This is the child component"; 
    // }

    foobar;
    clickHandler() {
        this.foobar = "This is the child component";
    }
    resetHandler() {
        this.foobar = null;
    }
}