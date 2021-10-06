import { LightningElement } from 'lwc';

export default class LifecycleParent extends LightningElement {

    isChildVisible = false;

    constructor() {
        super()
        // Can't use querySelector yet because html is not yet rendered. We can only use this.template to add something likde a listener.
        // this.template.addEventListener('mouseover' function(){})
        console.log('Parent constructor() called');
    }

    connectedCallback() {
        // Used to fetch data on page from seerver while component loads
        // Calls to Apex can be made here
        console.log('Parent connectedCallback() called');
    }

    // This callback is called LOADS of times. In fact it can be called eveytime you write a character from your keyboard.
    renderedCallback() {
        console.log('Parent renderedCallback() called');
    }

    // Creating property name
    name;
    // Creating changeHandler
    changeHandler(event) {
        this.name = event.target.value
    }

    handleClick() {
        // Toggle true/false
        this.isChildVisible = !this.isChildVisible;
    }
}