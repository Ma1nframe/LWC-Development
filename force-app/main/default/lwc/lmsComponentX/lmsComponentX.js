import { LightningElement, wire } from "lwc";
import SAMPLEMC from "@salesforce/messageChannel/lightningMessage__c";
import { MessageContext, publish } from "lightning/messageService";
export default class LmsComponentX extends LightningElement {
  @wire(MessageContext)
  context;

  inputValue;

  inputHandler(event) {
    this.inputValue = event.target.value;
  }

  publishMessage() {
    const message = {
      lmsData: {
        value: this.inputValue
      }
    };
    // publish(messageContext, messageChannel, message) -> (object, reference, data)
    publish(this.context, SAMPLEMC, message);
  }
}
