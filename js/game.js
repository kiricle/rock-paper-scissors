
class Game {
  constructor(display, computer) {
    this.choices = document.querySelectorAll('button');
    this.playerChoice;
    this.display = display;
    this.rules = {
      'rock': {
        'scissors': 1,
        'paper': 0
      },
      'scissors': {
        'paper': 1,
        'rock': 0
      },
      'paper': {
        'rock': 1,
        'scissors': 0
      }
    }
    this.computer = computer;
    this.wins = 0;
    this.losses = 0;
    this.currentRound = 1;
  }

  onLoad() {
    this.choices.forEach(btn => {
      btn.addEventListener('click', e => {
        this.playerChoice = e.target.dataset.selection;
        this.display.displayRound();
        this.playRound();
      });
    })
  }

  playRound() {
    this.computer.makeChoice();
    const result = this.getResult();
    if (result) {
      this.display.displayRound(this.currentRound,
        document.querySelector(`[data-selection=${this.playerChoice}]`).innerText,
        document.querySelector(`[data-selection=${this.computer.choice}]`).innerText,
        `${this.playerChoice} vs ${this.computer.choice}, You've won!`,
        'player');
      this.wins += 1;
    } else if (result === 0) {
      this.display.displayRound(this.currentRound,
        document.querySelector(`[data-selection=${this.playerChoice}]`).innerText,
        document.querySelector(`[data-selection=${this.computer.choice}]`).innerText,
        `${this.playerChoice} vs ${this.computer.choice}, You've lost!`,
        'computer');
      this.losses += 1;
    } else {
      this.display.displayRound(this.currentRound,
        document.querySelector(`[data-selection=${this.playerChoice}]`).innerText,
        document.querySelector(`[data-selection=${this.computer.choice}]`).innerText,
        `${this.playerChoice} vs ${this.computer.choice}, Draw!`,
        'draw');
    }
    this.hasWon();
    this.currentRound += 1;
  }

  getResult() {
    console.log(this.rules[this.playerChoice][this.computer.choice]);
    return this.rules[this.playerChoice][this.computer.choice];
  }

  hasWon() {
    if (this.wins >= 3) {
      this.display.displayEnd(true);
    }

    if (this.losses >= 3) {
      this.display.displayEnd(false);
    }
  }
}

export default Game;