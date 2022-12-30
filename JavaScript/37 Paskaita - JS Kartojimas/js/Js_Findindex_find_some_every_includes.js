//1) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris yra didenis už A (A - funkcijos parametras skaičius).
console.groupCollapsed("1 užduotis");
numbers = [1, 2, 3, 4, 5, 55, 45, 35, 25, 15, 5, 4, 3, 2, 1];
const findIndex = (array, number) => array.findIndex(element => element > number);
console.log(findIndex(numbers, 3));
console.groupEnd();

//2) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris yra mažesnis už A (A - funkcijos parametras skaičius).
console.groupCollapsed("2 užduotis");
const findIndex2 = (array, number) => array.findIndex(element => element < number);
console.log(findIndex2(numbers, 3));
console.groupEnd();

//3) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris prasideda mažąja raide.
console.groupCollapsed("3 užduotis");
array = ["apple", "Banana", "cherry", "DATE", "elderberry", "fig", "grape"];
const findIndex3 = (array) => array.findIndex(element => element[0] === element[0].toLowerCase());
console.log(findIndex3(array));
console.groupEnd();

//4) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris prasideda didžiąja raide.
console.groupCollapsed("4 užduotis");
const findIndex4 = (array) => array.findIndex(element => element[0] === element[0].toUpperCase());
console.log(findIndex4(array));
console.groupEnd();

//5+) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).
console.groupCollapsed("5+ užduotis");
const findIndex5 = (array, number1, number2) => array.findIndex(element => element > number1 && element < number2);
console.log(findIndex5(numbers, 3, 5));
console.groupEnd();

//6++) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris prasideda didžiąja arba mažąja raide (true arba false) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).
console.groupCollapsed("6++ užduotis");
array = ["apple", "Banana", "cherry", "DATE", "elderberry", "fig", "grape"];
const findIndex6 = (array, number1, number2) => array.findIndex(element => (element[0] === element[0].toLowerCase() || element[0] === element[0].toUpperCase()) && element.length > number1 && element.length < number2);
console.log(findIndex6(array, 3, 7));

console.groupEnd();

//7) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris yra didenis už A (A - funkcijos parametras skaičius).
console.groupCollapsed("7 užduotis");
let numberMassive = [1, 2, 3, 4, 5, 55, 45, 35, 25, 15, 5, 4, 3, 2, 1];
const find = (array, number) => array.find(element => element > number);
console.log(find(numberMassive, 3));
console.groupEnd();

//8) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris yra mažesnis už A (A - funkcijos parametras skaičius).
console.groupCollapsed("8 užduotis");
const find2 = (array, number) => array.find(element => element < number);
console.log(find2(numberMassive, 3));
console.groupEnd();

//9) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris prasideda mažąja raide.
console.groupCollapsed("9 užduotis");
let array2 = ["apple", "Banana", "cherry", "DATE", "elderberry", "fig", "grape"];
const find3 = (array) => array.find(element => element[0] === element[0].toLowerCase());
console.log(find3(array2));
console.groupEnd();

//10) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris prasideda didžiąja raide.
console.groupCollapsed("10 užduotis");
const find4 = (array) => array.find(element => element[0] === element[0].toUpperCase());
console.log(find4(array2));
console.groupEnd();

//11+) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).
console.groupCollapsed("11+ užduotis");
const find5 = (array, number1, number2) => array.find(element => element > number1 && element < number2);
console.log(find5(numberMassive, 3, 7));
console.groupEnd();

//12++) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris prasideda didžiąja arba mažąja raide (true arba false) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).
console.groupCollapsed("12++ užduotis ");
array = ["apple", "Banana", "cherry", "DATE", "elderberry", "fig", "grape"];
const find6 = (array, number1, number2) => array.find(element => element.length > number1 && element.length < number2);
console.log(find6(array, 4, 8));

console.groupEnd();

//13) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas yra didenis už A (A - funkcijos parametras skaičius). 
console.groupCollapsed("13 užduotis");
let numberMas2 = [1, 2, 3, 4, 5, 55, 45, 35, 25, 15, 5, 4, 3, 2, 1];
const some = (array, number) => array.some(element => element > number);
console.log(some(numberMas2, 3));
console.groupEnd();

//14) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas yra mažesnis už A (A - funkcijos parametras skaičius).
console.groupCollapsed("14 užduotis");
const some2 = (array, number) => array.some(element => element < number);
console.log(some2(numberMas2, 3));
console.groupEnd();

//15) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas prasideda mažąja raide.
console.groupCollapsed("15 užduotis");
const some3 = (array) => array.some(element => element[0] === element[0].toLowerCase());
console.log(some3(["A", "b", "C", "d", "E"]));
console.groupEnd();

//16) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas prasideda didžiąja raide.
console.groupCollapsed("16 užduotis");
const some4 = (array) => array.some(element => element[0] === element[0].toUpperCase());
console.log(some4(["A", "b", "C", "d", "E"]));
console.groupEnd();

//17+) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).
console.groupCollapsed("17+ užduotis");
const some5 = (array, number1, number2) => array.some(element => element < number1 && element > number2);
console.log(some5([1, 2, 3, 4, 5], 3, 1));
console.groupEnd();

//18++) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas prasideda didžiąja arba mažąja raide (true arba false) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).
console.groupCollapsed("18++ užduotis");

console.groupEnd();

//19) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai yra didenis už A (A - funkcijos parametras skaičius).
console.groupCollapsed("19 užduotis");
const every = (array, number) => array.every(element => element > number);
console.log(every([1, 2, 3, 4, 5], 3));
console.groupEnd();

//20) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai yra mažesnis už A (A - funkcijos parametras skaičius).
console.groupCollapsed("20 užduotis");
const every2 = (array, number) => array.every(element => element < number);
console.log(every2([1, 2, 3, 4, 5], 6));
console.groupEnd();

//21) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai prasideda mažąja raide.
console.groupCollapsed("21 užduotis");
const every3 = (array) => array.every(element => element[0] === element[0].toLowerCase());
console.log(every3(["a", "b", "c", "d", "e"]));
console.groupEnd();

//22) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai prasideda didžiąja raide.
console.groupCollapsed("22 užduotis");
const every4 = (array) => array.every(element => element[0] === element[0].toUpperCase());
console.log(every4(["A", "b", "C", "D", "E"]));
console.groupEnd();

//23+) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).
console.groupCollapsed("23+ užduotis");
const every5 = (array, number1, number2) => array.every(element => element < number1 && element > number2);
console.log(every5([1, 2, 3, 4, 5], 3, 1));
console.groupEnd();

//24++) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai prasideda didžiąja arba mažąja raide (true arba false) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).   
console.groupCollapsed("24++ užduotis");
let masyvas2 = ["A", "b", "C", "d", "E"];
const every6 = (array, number1, number2) => array.every(element => element[0] === element[0].toLowerCase() || element[0] === element[0].toUpperCase() && element.length < number1 && element.length > number2);
console.log(every6(masyvas2, 3, 1));
console.groupEnd();

//25) Parašyti funkciją, kuri patikrina ar jai duotame masyve yra kažkokia nurodyta reikšmė.
console.groupCollapsed("25 užduotis");
const includes = (array, value) => array.includes(value);
console.log(includes([1, 2, 3, 4, 5], 3));
console.groupEnd();

//26) Parašyti funkciją, kuri patikrina ar jai duotame masyve yra kažkokia nurodyta reikšmė, nuo pasirinkto indekso.

console.groupCollapsed("26 užduotis");
const includes2 = (array, value, index) => array.includes(value, index);
console.log(includes2([1, 2, 3, 4, 5], 3, 4));
console.groupEnd();

