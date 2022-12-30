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

function laipsnioKelymas(nr1, nr2) {
  return nr1 ** nr2;
}
console.log("15 laipsnis 5", laipsnioKelymas(15, 5));


function sakniesTraukymas(nr1, nr2) {
  return nr1 ** (1/nr2);
  }
  console.log("Iš 25 traukiamia 2 laipsnio šakni", sakniesTraukymas(625,2));
  console.log("Iš 25 traukiamia 4 laipsnio šakni", sakniesTraukymas(625,4))
  console.log("Iš 25 traukiamia 3 laipsnio šakni", sakniesTraukymas(625,3))
  



  function liekanosRadimas(nr1, nr2) {
   return nr1 % nr2;
  }


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

let ShowzodziuMasyvas = ['labas', 'koks', 'tavo', 'vardas', 'iš', 'kur', 'ąžuolas', 'suolas', 'Привет'];
function rikiuojameZodiuMasyva(ShowzodziuMasyvas){
  return ShowzodziuMasyvas.sort((a, b) => a.localeCompare(b));
}
console.groupEnd();
// 5   Sukurti funkciją, kuri surikiuotų gautąją informaciją (parametrą(masyvą(tik su number kintamaisiais))) nuo didžiausio iki mažiausio ir ją išvestų į konsolę.
console.groupCollapsed('Task5')

let Skaiciai = [15, 20, 1, 10, 550, 80, 99, 55, 41, 81, -2, -550, -15];
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
// 8 1 variantas
console.groupCollapsed('Task8')

let vardasPavarde = "Petras Petrauskas";
function nameNumber(vardasPavarde) {
  let numberOfLetters = ((vardasPavarde).length);
  return numberOfLetters;
  }

console.groupEnd();

//8.2variantas

function zodziuIlgis(zodis1, zodis2){
  let pirmoZodzioIlgis = zodis1.length;
  let antroZodzioIlgis = zodis2.length;
  let atsakymas = pirmoZodzioIlgis + antroZodzioIlgis; 
  return atsakymas;
}
//return (zodis1 + zodis2).length; 
// 9

console.groupCollapsed('Task9')

function showArray(kelintaraide) {
const abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
return (abc[kelintaraide-1]);

}


console.groupEnd();

// 10   Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti "sum", "sub", "div", "multi" (matematinės reikšmės - sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9...). Hint: Reikės funkcijoje naudoti if-else arba switch.
console.groupCollapsed('Task10')

let n1 = 5;
let n2 = 4;

function Suskacioti(n1, n2) {
  if (n1 + n2){
    let atsakymas = n1 + n2;
    return atsakymas;
  }
}


console.groupEnd();
// 11 1budas

console.groupCollapsed('Task11')

let randomNumber = Math.floor(Math.random() * 11);
console.log(randomNumber);
function pow2(randomNumber){return randomNumber**2};
console.log(pow2(randomNumber));
console.groupEnd();

//11 2 budas

function randomNumber_1_to_10(){
  return Math.ceil(Math.random() * 10);
}
function squareNumber(){
return randomNumber_1_to_10()**2;
}
console.log(squareNumber());

//Extra0 1variantas
console.groupCollapsed('extra0')

let pirminisMasyvas=[1, 2, 3, 4, 5, 6, 7]
let antrinisMasyvas=['a', 'b', 'c']
do{
pirminisMasyvas.splice(antrinisMasyvas.length, 0, antrinisMasyvas.shift())
console.log(pirminisMasyvas);
} while (antrinisMasyvas.length > 0);

//2 variantas
function fancyMasyvas(pirminisMasyvas, antrinisMasyvas) { 
  while (antrinisMasyvas.length){
    pirminisMasyvas.splice(antrinisMasyvas.length, 0, antrinisMasyvas.shift())
  }
  return pirminisMasyvas;
}
console.log(fancyMasyvas(pirminisMasyvas,antrinisMasyvas));


console.groupEnd();
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


