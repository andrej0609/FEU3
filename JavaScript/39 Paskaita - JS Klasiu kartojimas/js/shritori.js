class Shiritori {
  constructor() {
    this.words = [];
    this.game_over = false;
  }

  play(word) {
    if (this.words.length === 0) {
      this.words.push(word);
      return this.words;
    } else if (this.words[this.words.length - 1].slice(-1) === word[0]) {
      this.words.push(word);
      return this.words;
    } else {
      this.game_over = true;
      return "game over";
    }
  }

  restart() {
    this.words = [];
    this.game_over = false;
    return "game restarted";
  }
}

const shiritori = new Shiritori();

const shiritoriInput = document.getElementById("shiritoriInput");
const shiritoriButton = document.getElementById("shiritoriButton");
const shiritoriRestart = document.getElementById("shiritoriRestart");
const shiritoriParagraph = document.getElementById("shiritori");

shiritoriButton.addEventListener("click", () => {
  shiritoriParagraph.innerText = shiritori.play(shiritoriInput.value);
  shiritoriInput.value = "";
});

shiritoriRestart.addEventListener("click", () => {
  shiritoriParagraph.innerText = shiritori.restart();
});



