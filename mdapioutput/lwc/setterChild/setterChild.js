import { LightningElement, api } from "lwc";

export default class SetterChild extends LightningElement {
  userDetails;

  @api
  get detail() {
    // It's important to use get because the data is dynamically changed by set
    return this.userDetails;
  }

  set detail(data) {
    // Mutate data by creating a shallow copy w/ spread operator
    let newAge = data.userAge * 2;
    // Spread operator rule: Right side data overides data of left side. Also it can add new properties.
    this.userDetails = { ...data, userAge: newAge, location: "Boston" };

    /*** Primitive */
    /*
        // whatever data comes in updates the userDetails
        this.userDetails = data
        */
  }
}
