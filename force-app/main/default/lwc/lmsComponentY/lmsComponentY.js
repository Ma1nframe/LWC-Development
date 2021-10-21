import { LightningElement, wire } from "lwc";
import SAMPLEMC from "@salesforce/messageChannel/lightningMessage__c";
import {
  APPLICATION_SCOPE,
  MessageContext,
  subscribe,
  unsubscribe
} from "lightning/messageService";
export default class LmsComponentY extends LightningElement {
  receivedMessage;
  // Variable created for unsubscription
  subscription;

  @wire(MessageContext)
  context;

  // We want subscribeMessage to be called on page load so we place it in connectedCallback() which if fired on page load
  connectedCallback() {
    this.subscriptionMessage();
  }

  /** subscribe(this.context, SAMPLEMC, (message)=>this.handleMessage(message), {scope:APPLICATION_SCOPE}) {}  */
  // We get an initial error here because you can't use the function directy, it should be in a method or attached to @wire
  // To resolve this we create a method and move our function inside of it

  // Instructions on how to recieve message and what to do
  subscriptionMessage() {
    // "this.subscription =" was placed here to reference this subscribe() function to be used later used in unsubscribe
    this.subscription = subscribe(
      this.context,
      SAMPLEMC,
      (message) => this.handleMessage(message),
      { scope: APPLICATION_SCOPE }
    );
  }

  // What to do with message
  handleMessage(message) {
    this.receivedMessage = message.lmsData.value
      ? message.lmsData.value
      : "No Message Published";
  }

  unsubscriptionMessage() {
    unsubscribe(this.subscription);
    this.subscription = null;
    this.receivedMessage = null;
  }
}
