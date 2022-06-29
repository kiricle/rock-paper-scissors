
class Computer {
  constructor() {
    this.choices = ['rock', 'scissors', 'paper'];
    this.choice;
  }

  makeChoice() {
    this.choice = this.choices[Math.floor(Math.random() * this.choices.length)];
  }
}

export default Computer;