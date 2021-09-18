import { LightningElement, track } from 'lwc';

export default class TrackComponent extends LightningElement {

    @track address = {
        city: 'Boston',
        State: 'MA'
    }
    /** JAVASCRIPT STATES YOU SHOUD NOT MUTATE VARIABLES SO THERE IS A BETTER WAY TO HANDLE THIS THAN TRACK */

    trackHandler(event){
        this.address.city = event.target.value;
    }

    anotherTrackHandler(event) {
        this.address = {...this.address, 'state':event.target.value}
    }
}