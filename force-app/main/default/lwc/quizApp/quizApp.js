import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected = {}; // Storing answers

    correctAnswers = 0 // To show the number of correct answers

    isSubmitted = false; // Use to show the result

    myQuestions=[
        {
            id: 'Question1 ',
            question: 'Who is the greatest Quarterback in NFL history?',
            answers: {
                a: 'Joe Namath',
                b: 'Peyton Manning',
                c: 'Tom Brady'
            },
            correctAnswer: 'c'
        },
        {
            id: 'Question 2',
            question: 'What is the Apex predator of the ocean?',
            answers: {
                a: 'Great White Shark',
                b: 'Orca',
                c: 'Sperm Whale'
            },
            correctAnswer: 'b'
        },
        {
            id: 'Question 3',
            question: 'If I put 15 apples on a table, and I take away 8, how many apples do I have?',
            answers: {
                a: '8',
                b: '9',
                c: '7'
            },
            correctAnswer: 'a'
        }
    ];

    // For disabling the submit button until all 3 options are selected
    get allNotSelected() {
        // Trick - bang operator. The statement starts out as false, bang returns true and submit button is not clickable.
        // If allNotSelected returns true the bang operator will flip it to false and "disabled" will be false, enabling you to click submit.
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    };

    // For applying dynamic content to style out result 
    get isScoredFull() {
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers ? 'slds-text-color_success' : 'slds-text-color_error'}`
    };

    // Handler that gets called every time an option is clicked
    changeHandler(event) {
        console.log("name ", event.target.name)
        console.log("value ", event.target.value)
        // const name = event.target.name;
        // const value = event.target.value;
        // Use Destructor
        const {name, value} = event.target;
        // Use Spread operator
        // this.selected = {...this.selected, ["Question 1"]:"a"}
        this.selected = {...this.selected, [name]:value}
    };

    // Submit handler
    submitHandler(event) { 
        // Because the submit button is in a form it always refreshes the page when clicked
        // To prevent that we can use a method preventDefault()
        event.preventDefault();
        // Item (or any other name) is interchangable with myQuestions, it's the placeholder for the thing we're filtering i.e. myQuestions.
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer);
        // filter always retrns an array. Let's check to see how many correct answers we have.
        this.correctAnswers = correct.length;
        this.isSubmitted = true;

        console.log('this.correctAnswers', this.correctAnswers);
    };

    // Reset Handler
    resetHandler() { 
        this.selected = {};
        this.selected = 0;
        this.isSubmitted = false;
    };
};