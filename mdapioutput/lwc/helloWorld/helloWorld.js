import { LightningElement } from "lwc";

export default class HelloWorld extends LightningElement {
  /** PROPERTIES */
  /**
    name; // undefined
    age=30; // number
    fullName = 'AJ Daddario'; // string
    showData = false; // boolean
    details = { // object
        someName: 'dummy',
        place: 'Boston',

    }
    userList = ['a', 'b', 'c']; // list array
    */

  /** DATA BINDING */

  someData = "Hello World";
  someDetails = {
    objectData: "This is an object binded message",
    moreObjectData: "This is another object binded message"
  };
}
