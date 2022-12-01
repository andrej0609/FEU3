// 1
let nr1 = 15;
let nr2 = 5;
function sudetis(nr1, nr2) {
  if (typeof (nr1) === "number" && typeof (nr2) === "number") {
    let atsakymas = nr1 + nr2;
    return atsakymas;
  } else {
    return "Error 404";
  }
}
function atimtis(nr1, nr2) {
  if (typeof (nr1) === "number" && typeof (nr2) === "number") {
    let atsakymas = nr1 - nr2;
    return atsakymas;
  } else {
    return "Error 404";
  }
}

function dalyba(nr1, nr2) {
  if (typeof (nr1) === "number" && typeof (nr2) === "number") {
    let atsakymas = nr1 / nr2;
    return atsakymas;
  } else {
    return "Error 404";
  }
}
function daugyba(nr1, nr2) {
  if (typeof (nr1) === "number" && typeof (nr2) === "number") {
    let atsakymas = nr1 * nr2;
    return atsakymas;
  } else {
    return "Error 404";
  }
}
daugyba(10, 5)

// 2
function firstToLast(array) {
  for (let element of array) {
    console.log(element);
  }
}
// 3
function lastToFirst(array){
  for(let i = array.length - 1; i >= 0; i--){
    console.log(array[i]);
  }
  // array.reverse();
  // for(let element of array){
  //   console.log(element);
  // }
}

// 4
console.groupCollapsed('Task4')

let ShowzodziuMasyvas = ['labas', 'koks', 'tavo', 'vardas', 'iš', 'kur', 'esi'];
function rikiuojameZodiuMasyva(ShowzodziuMasyvas){
  return ShowzodziuMasyvas.sort((a, b) => a.localeCompare(b));
}
console.groupEnd();
// 5   Sukurti funkciją, kuri surikiuotų gautąją informaciją (parametrą(masyvą(tik su number kintamaisiais))) nuo didžiausio iki mažiausio ir ją išvestų į konsolę.
console.groupCollapsed('Task5')

let Skaiciai = [15, 20, 1, 10, 550, 80, 99, 55, 41, 81];
function GetSkaiiuMasyva(Skaiciai){
  return Skaiciai.sort(function (a, b) { return b - a });
}
console.groupEnd();
// 6  Sukurti funkciją, kuri į konsolę išvestų visus skaičius nuo pirmo duotojo parametro (imtinai) iki antrojo (imtinai). (paduodu 5,9 => grąžina 5,6,7,8,9)
console.groupCollapsed('Task6')
let number1 = 5;
let number2 = 9

function showNumbers(number1, number2) {
  for (i = number1; i <= number2; i++) {
    console.log(i);
  }
}
console.groupEnd();
// 7  Sukurti funkciją, kuri į konsolę išvestų skaičius kas pirmąjį duotajį parametrą nuo antrojo duotojo parametro (imtinai) iki trečiojo duotojo parametro (imtinai). (paduodu 2,5,9 => grąžina 5,7,9)
console.groupCollapsed('Task7')
function getNumber(a, b, c) {
  for (i = b; i <= c; i+=a) {
    console.log(i);
  }
}

console.groupEnd();
// 8
console.groupCollapsed('Task8')
let vardasPavarde = "Petras Petraitis";
function nameNumber(vardasPavarde) {
  let numberOfLetters = ((vardasPavarde).length);
  return numberOfLetters;
  }
console.groupEnd();
// 9
console.groupCollapsed('Task9')

let array = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
function showArray(array){
  return (array[15]);
}


console.groupEnd();

// 10   Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti "sum", "sub", "div", "multi" (matematinės reikšmės - sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9...). Hint: Reikės funkcijoje naudoti if-else arba switch.


let n1 = 5;
let n2 = 4;
function sum(n1, n2) {
  if (typeof (n1) === "number" && typeof (n2) === "number") {
    let atsakymas = n1 + n2;
    return atsakymas;
  }
}
// 11
console.groupCollapsed('Task11')

let randomNumber = Math.floor(Math.random() * 11);
console.log(randomNumber);
function pow2(randomNumber){return randomNumber**2};
console.log(pow2(randomNumber));
console.groupEnd();

//Extra0

let pirminisMasyvas=[1, 2, 3, 4, 5, 6, 7]
let antrinisMasyvas=['a', 'b', 'c']
do{
pirminisMasyvas.splice(antrinisMasyvas.length, 0, antrinisMasyvas.pop())
console.log(pirminisMasyvas);
} while (antrinisMasyvas.length > 0);


//Extra 1

console.groupCollapsed('extra1')

for(let i = 1; i < 100; i++) {
  if(i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if(i % 3 === 0) {
    console.log('Fizz');
  } else if(i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}
console.groupEnd();

//Extra 2

console.groupCollapsed('extra2')

let n = 101;
nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime;
  }

  console.log(i)
}
console.groupEnd();


