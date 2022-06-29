
class Display {
  constructor() {
    this.battleground = document.querySelector('.battleground');
    this.startingGround = document.querySelector('.starting-ground');
  }

  displayRound(round, playerChoice, computerChoice, resultString, winner) {
    this.battleground.classList.remove('invisible');
    this.startingGround.classList.add('invisible');
    console.log(this.battleground.children);
    this.battleground.children[0].innerHTML = `Round ${round}, ${resultString}`
    this.battleground.children[1].children[0].children[1].innerText = playerChoice;
    this.battleground.children[1].children[1].children[1].innerText = computerChoice;
    if (winner === 'player') {
      this.battleground.children[1].children[0].children[1].classList.add('winner');
      this.battleground.children[1].children[1].children[1].classList.remove('winner');
    } else if (winner === 'computer') {
      this.battleground.children[1].children[1].children[1].classList.add('winner');
      this.battleground.children[1].children[0].children[1].classList.remove('winner');
    } else {
      this.battleground.children[1].children[0].children[1].classList.add('winner');
      this.battleground.children[1].children[1].children[1].classList.add('winner');
    }
  }

  displayStartingGround() {
    this.startingGround.classList.remove('invisible');
    this.battleground.classList.add('invisible');
  }

  displayEnd(hasWon) {
    if (hasWon) {
      this.battleground.innerHTML = '<h2 class="title">Congratulations! You have won the game.</h2>';

      const resetLink = document.createElement('a');
      resetLink.classList.add('title');
      resetLink.href = `${location.href}`;
      resetLink.innerHTML = 'Reset the Game';

      this.battleground.appendChild(resetLink);
    } else {
      this.battleground.innerHTML = '<h2 class="title">Unfortunately, You have lost!</h2>';

      const resetLink = document.createElement('a');
      resetLink.classList.add('title');
      resetLink.href = `${location.href}`;
      resetLink.innerHTML = 'Reset the Game';

      this.battleground.appendChild(resetLink);
    }
  }
}

export default Display;