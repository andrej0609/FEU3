
class Person {
  constructor([name, surname]) {
    this.name = name;
    this.surname = surname;
    this.appear = function () {
    };
  }
}

const formEl = document.getElementById("fullName");
const inputFullNameEl = document.getElementById("hereFullName");
const tableEl = document.getElementById("lentele");
const nameEl = document.getElementById("Vardas");
const surnameEl = document.getElementById("Pavarde");

let zmones = [];

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = inputFullNameEl.value.trim().split(" ");
  nameEl.textContent = inputValue[0].charAt(0).toUpperCase() + inputValue[0].slice(1).toLowerCase();
  surnameEl.textContent = inputValue[1].charAt(0).toUpperCase() + inputValue[1].slice(1).toLowerCase();
  zmones.push(new Person(inputValue));
  console.log("zmones===", zmones);
});
