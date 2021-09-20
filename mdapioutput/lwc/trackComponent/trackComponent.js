import { LightningElement, track } from 'lwc';

export default class TrackComponent extends LightningElement {

    @track address = {
        city: 'Boston',
        State: 'MA'
    }
    
    /** JAVASCRIPT STATES YOU SHOUD NOT MUTATE VARIABLES SO TRACK IS UAED, ALTHOUGH THERE IS ANOTHER WAY TO HANDLE THIS THAN TRACK */

    // Track Operator
    trackHandler(event){
        this.address.city = event.target.value;
    }

    // SPREAD OPERATOR
    anotherTrackHandler(event) {
        this.address = {...this.address, 'state':event.target.value}
    }
}