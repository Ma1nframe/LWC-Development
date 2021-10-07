import { LightningElement } from 'lwc';

export default class HelloQuerySelector extends LightningElement {

    userNames = ["john", "bob", "steve", "joe"];

    fetchDetailHandler() {
        const elem = this.template.querySelector('h1');
        elem.style.border = "2px solid red"; // Dynamic style editing that adds style to DOM
        console.log(elem.innerText); // Renders h1 tag text in console

        // Although there is only 1 div tag with the class 'name' in the code, the loop will create multiple of them
        const userElements = this.template.querySelectorAll('.name');
        // userElements is a node that represents all of the html divs selected
        // Array.from converts userElements into an array, which represents the array as a whole, while the item=> function is each specific div
        Array.from(userElements).forEach(item=> {
            // Print each div text to the console
            console.log(item.innerText);
            // Dynamically add an attribute to each div. It adds a title tag to each one separately with the value of its own text (i.e. innerText)
            item.setAttribute("title", item.innerText)
        });

        // lwc:dom="manual" demo
        // Renders a child element manually using the lwc:dom="manual" directive
        const childElem = this.template.querySelector('.child')
        childElem.innerHTML = '<p>I am a child element</p>';

    };
}