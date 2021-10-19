import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {

    closeHandler() {
        const buttonEvent = new CustomEvent('close', {
            // bubbles & detail communicate from child to parent
            bubbles: true,
            detail: {
                objName: "Modal Detail communicated by child event"
            }
            // detail can be any kind of data like a basic string. -> detail: "Modal Detail communicated by child event"

        });
        
        // this.dispatchEvent(new CustomEvent('close'));
        this.dispatchEvent(buttonEvent); 
    }

    footerHandler() {
        console.log("footer event called");
    }

}