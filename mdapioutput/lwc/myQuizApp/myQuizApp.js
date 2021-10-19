import { LightningElement } from "lwc";

export default class MyQuizApp extends LightningElement {
  selected = {};

  correctAnswers = 0;

  showScore = false;

  myNewQuestions = [
    {
      id: "Question 1",
      question: "What is the capitol of Japan?",
      answers: {
        a: "Hong Kong",
        b: "Tokyo",
        c: "Kyoto"
      },
      correctAnswer: "b"
    },
    {
      id: "Question 2",
      question: "What language does LWC use?",
      answers: {
        a: "Java",
        b: "Javascript",
        c: "PHP"
      },
      correctAnswer: "b"
    },
    {
      id: "Question 3",
      question:
        "There’s a one-story house in which everything is yellow. Yellow walls, yellow doors, yellow furniture. What color are the stairs?",
      answers: {
        a: "Yellow",
        b: "No color",
        c: "You have not told us yet"
      },
      correctAnswer: "b"
    }
  ];

  get notSelected() {
    // Attached to submit button which will not activate until all the questions are answered.
    return !(Object.keys(this.selected).length === this.myNewQuestions.length);
  }

  changeHandler(event) {
    const { name, value } = event.target;
    this.selected = { ...this.selected, [name]: value };
  }

  submitHandler(event) {
    // Because the submit button is in a form it always refreshes the page when clicked
    // To prevent that we can use a method preventDefault()
    event.preventDefault();
    let correct = this.myNewQuestions.filter(
      (x) => this.selected[x.id] === x.correctAnswer
    );
    this.correctAnswers = correct.length;

    // Show score
    this.showScore = true;
  }

  get scoreMethod() {
    return this.correctAnswers === 3;
  }

  resetHandler() {
    this.selected = {};
    this.correctAnswers = 0;
  }
}
