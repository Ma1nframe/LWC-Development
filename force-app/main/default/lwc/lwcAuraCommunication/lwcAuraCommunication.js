import { LightningElement, api } from "lwc";

export default class LwcAuraCommunication extends LightningElement {
  @api title;

  callAura() {
    const foo = new CustomEvent("sendmsg", {
      detail: {
        msg: "Hello from LWC custom event sendmsg"
      }
    });
    this.dispatchEvent(foo);
  }
}
