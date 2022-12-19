//1) Nusikopijuok array (let cars = ["BMW", "VW", "Audi"]) ir naudojant forEach, atspausdink kiekvieną elementą (automobilio reikšmę).

console.groupCollapsed("1) Naudojant forEach, atspausdink kiekvieną elementą (automobilio reikšmę).");

let cars = [
  'BMW',
  'VW',
  'Audi'
];
cars.forEach((car) => {
  console.log(car);
});

console.groupEnd();

//  2) Pakoreguok pirmą pratimą, kad atspaudintum index: value (pvz: "0: BMW", "1: VW" ir t.t.).

console.groupCollapsed("2) Pakoreguok pirmą pratimą, kad atspaudintum index: value");

let pvz = '0: BMW';
let pvz2 = '1: VW';
let pvz3 = '2: Audi';
console.log(pvz);
console.log(pvz2);
console.log(pvz3);

console.groupEnd();

//3) Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padaryk, kad susikurtų naujas array (ir jį atspausdink), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" => "Petras").

console.groupCollapsed("3) Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok");

let draugai = ['peTras', 'Jonas', 'aNTanaS', "luKas", "aRtūras", "EldAras "];
let draugai2 = draugai.map((draugas) => draugas[0].toUpperCase() + draugas.slice(1).toLowerCase());
console.log(draugai2);

console.groupEnd();

//4) Sukurk Array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter - prafiltruok tik tuos skaičius, kurie didesni arba lygūs 18.

console.groupCollapsed("4) Sukurk Array su savo draugų amžiais (nuo 1 iki 99). ");

let amziai = [1, 15, 18, 25, 27, 33, 45, 99];

let amziai2 = amziai.filter((amzius) => amzius >= 18);
console.log(amziai2);

console.groupEnd();

//5) Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find - surask bet kokį pirmą miestą, kuris prasideda iš "K" raidės.

console.groupCollapsed("5) Sukurk Array su Lietuvos miestais ");

let miestai = ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiauliai', 'Panevėžys', 'Alytus', 'Marijampolė', 'Mažeikiai', 'Jonava', 'Utena', 'Kėdainiai', 'Telšiai', 'Visaginas'];

let miestas = miestai.find((miestas) => miestas[0] === 'K');
console.log(miestas);

console.groupEnd();

//6) Penktame pratime esantį sprendimą pakoreguot ir patikrink su some ar bent vienas miestas prasideda iš mažosios.

console.groupCollapsed("6) Penktame pratime esantį sprendimą pakoreguot ir patikrink su some ar bent vienas miestas prasideda iš mažosios.");

let miestas2 = miestai.some((miestas) => miestas[0] === miestas[0].toLowerCase());
console.log(miestas2);

console.groupEnd();

//7) Pakoreguok šeštą pratimą, kad tikrintų ne ar bent vienas miestas prasideda iš mažosios, bet ar visi iš didžiosios.

console.groupCollapsed("7) Pakoreguok šeštą pratimą, kad tikrintų ne ar bent vienas miestas prasideda iš mažosios, bet ar visi iš didžiosios.");

let miestas3 = miestai.every((miestas) => miestas[0] === miestas[0].toUpperCase());
console.log(miestas3);

console.groupEnd();

