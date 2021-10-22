import { LightningElement } from "lwc";

export default class Getter extends LightningElement {
  /** GETTER */
  users = ["John", "MIke", "Steve"];

  get firstUser() {
    return this.users[0].toUpperCase();
  }

  num1 = 10;
  num2 = 20;

  get multiply() {
    return this.num1 * this.num2;
  }
}
