import { LightningElement } from "lwc";

export default class TemplateLooping extends LightningElement {
  // Array
  fruitList = ["apple", "orange", "peach", "watermelon"];

  ceoList = [
    {
      id: 1,
      company: "Google",
      fullName: "Sundar Pichai"
    },
    {
      id: 2,
      company: "Apple",
      fullName: "Steve Jobs"
    },
    {
      id: 4,
      company: `Facebook`,
      fullName: "Mark Zuckerberg"
    },
    {
      id: 4,
      company: "Amazon",
      fullName: `Jeff Bezos`
    }
  ];
}
