import { LightningElement } from "lwc";

export default class ReusableLightningCard extends LightningElement {
  handleFooter() {
    const footerElem = this.template.querySelector("footer");
    if (footerElem) {
      footerElem.classList.remove("slds-hide");
    }
  }
}
