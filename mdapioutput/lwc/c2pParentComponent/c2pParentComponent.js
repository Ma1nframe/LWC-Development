import { LightningElement } from "lwc";

export default class C2pParentComponent extends LightningElement {
  showModal = false;

  msg;

  clickHandler() {
    this.showModal = true;
  }

  closeParentHandler(event) {
    // this.msg = event.detail;
    this.msg = event.detail.objName;
    this.showModal = false;
  }
}
