import { LightningElement } from 'lwc';

export default class LifecycleChild extends LightningElement {

    constructor() {
        super()
        // Can't use querySelector yet because html is not yet rendered. We can only use this.template to add something likde a listener.
        // this.template.addEventListener('mouseover' function(){})
        console.log('Child constructor() called');
    }

    // Example use case with connected/disconnected Callbacks: setting/clearing the interval to prevent memory leaks
    interval;
    msg() {
        console.log('setInterval called in child component connectedCallback()')
    }

    connectedCallback() {
        // Used to fetch data on page from server while component loads
        // Calls to Apex can be made here
        console.log('Child connectedCallback() called');

        // Example use case with connected/disconnected Callbacks
        this.interval = window.setInterval(this.msg, 5000)

        // Setup an error for parent errorCallback() to catch
        throw new Error('Error loading child connectedCallback()');
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

    disconnectedCallback() {
        alert('Child disconnectedCallback() was executed and clearInterval was called');
        // when disconnectedCallback() is executed it will call clearInterval to prevent memory leaks
        window.clearInterval(this.interval); 
    }


}