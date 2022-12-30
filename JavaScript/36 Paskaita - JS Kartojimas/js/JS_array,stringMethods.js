//1) Parašykite funkciją, kuri iš jai duotojo masyvo suformuotų ir grąžintų string.
console.groupCollapsed('1 uzduotis');


let masyvas = ['Labas', 'Vakaras', 25, 14, , 13, false, true]
function uzd1(masyvas) {
  let text = '';
  for (let i = 0; i < masyvas.length; i++) {
    text += masyvas[i];
  }
  return text;
}

console.log(uzd1(masyvas));

console.groupEnd();

//2) Parašykite funkciją, kuriai padavus kažkokį number kintamąjį (ilgą 10+ skaitmenų), jinai jį išvestų į konsolę su "-" simboliu tarp dviejų lyginių skaičių. (pvz: paduodi 0645234, grąžina 0-6-45234)
console.groupCollapsed('2 uzduotis');
let number = 3706445286;

function uzd2(number) {
  let text = '';
  for (let i = 0; i < number.toString().length; i++) {
    if (number.toString()[i] % 2 === 0 && number.toString()[i + 1] % 2 === 0) {
      text += number.toString()[i] + '-';
    } else {
      text += number.toString()[i];
    }
  }
  return text;
}

console.log(uzd2(number));
console.groupEnd();

//3) Parašykite funkciją, kuri atliktų tą patį, ką daro .reverse() metodas. (žinoma nenaudokite reverse) grazinti reikia skaicius, ne teksta
console.groupCollapsed('3 uzduotis');
let masyvas2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function uzd3(masyvas2) {
  let apverstas = [];
  for (let i = masyvas2.length - 1; i >= 0; i--) {
    apverstas.push(masyvas2[i]);
  }
  return apverstas;
}

console.log(uzd3(masyvas2));

console.groupEnd();

//4) Parašykite funkciją, kuri iš jai paduoto masyvo išrinktų nurodytas reikšmes ir grąžintų likusias (išvestų į konsolę). (paduodama masyvas=[1,4,5,6,4,8,4,5], funkcija: func(masyvas, 4,6,8), grąžina: [1,5,5]). grazinti reikia skaicius, ne teksta be !args.includes(masyvas3[i])
console.groupCollapsed('4 uzduotis');
let masyvas3 = [1, 4, 5, 6, 4, 8, 4, 5];

function uzd4(masyvas3, ...args) {
  let likusios = [];
  for (let i = 0; i < masyvas3.length; i++) {
    if (!args.includes(masyvas3[i])) {
      likusios.push(masyvas3[i]);
    }
  }
  return likusios;
}

console.log(uzd4(masyvas3, 4, 6, 8));

console.groupEnd();

//5) Parašykite funkciją, kuri iš jai paduoto masyvo randa ir išspausdina didžiausią ir mažiausią skaičius.
console.groupCollapsed('5 uzduotis');

function uzd5(masyvas3) {
  let min = masyvas3[0];
  let max = masyvas3[0];
  for (let i = 0; i < masyvas3.length; i++) {
    if (masyvas3[i] < min) {
      min = masyvas3[i];
    }
    if (masyvas3[i] > max) {
      max = masyvas3[i];
    }
  }
  console.log(min, max);
}

uzd5(masyvas3);
console.groupEnd();

//6) Parašykite funkciją, kuri iš 2 jai paduotų masyvų grąžina(išveda į konsolę) pasikartojančias reikšmes. (jeigu yra dvi vienodos reikšmės abejuose masyvuose, ta reikšmė turi būti išvesta į konsolę. ne text'as)
console.groupCollapsed('6 uzduotis');
let masyvas4 = [8, 16, 45, 6, 77, 2, 14, 65, 7];
let masyvas5 = [15, 45, 2, 66, 78, 99, 7, 44, 145, 6];

function uzd6(masyvas4, masyvas5) {
  let pasikartojancios = [];
  for (let i = 0; i < masyvas4.length; i++) {
    for (let j = 0; j < masyvas5.length; j++) {
      if (masyvas4[i] === masyvas5[j]) {
        pasikartojancios.push(masyvas4[i]);
      }
    }
  }
  return pasikartojancios;
}

console.log(uzd6(masyvas4, masyvas5));
console.groupEnd();

//7) Parašykite funkciją, kuriai padavus du masyvus (pirmas: informacijos, antras: indeksų), suformuotų naują masyvą iš pirmojo, paimdamas tik tas reikšmes, kurios nurodytos indeksuose. (pirmas=["a","b","c","d","e","f"], antras=[0,3,4], naujas=["a","d","e"])
console.groupCollapsed('7 uzduotis');

let masyvas6 = ['a', 'b', 'c', 'd', 'e', 'f'];
let masyvas7 = [0, 3, 4];

function uzd7(masyvas6, masyvas7) {
  let naujas = [];
  for (let i = 0; i < masyvas7.length; i++) {
    naujas.push(masyvas6[masyvas7[i]]);
  }
  return naujas;
}

console.log(uzd7(masyvas6, masyvas7));
console.groupEnd();

//8) Parašykite funkciją, kuri iš jai paduoto masyvo atrinktų ir į konsolę išspausdintų tik unikalius duomenis.
console.groupCollapsed('8 uzduotis');

function uzd8(masyvas3) {
  let unikalus = [];
  for (let i = 0; i < masyvas3.length; i++) {
    if (!unikalus.includes(masyvas3[i])) {
      unikalus.push(masyvas3[i]);
    }
  }
  return unikalus;
}

console.log(uzd8(masyvas3));
console.groupEnd();

//9) Parašykite funkciją, kuri iš jai paduotų masyvų (2 arba daugiau) atrenka ir išspausdina tik tuos duomenis, kurie kartojasi visuose masyvuose.
console.groupCollapsed('9 uzduotis');

let masyvas8 = [11, 4, 55, 6, 43, 8, 4, 85];
let masyvas9 = [11, 4, 5, 6, 43, 8, 84, 85];
let masyvas10 = [11, 4, 55, 6, 43, 84, 4, 85];

function uzd9(masyvas8, masyvas9, masyvas10) {
  let kartojasiVisuose = [];
  for (let i = 0; i < masyvas8.length; i++) {
    if (masyvas9.includes(masyvas8[i]) && masyvas10.includes(masyvas8[i])) {
      kartojasiVisuose.push(masyvas8[i]);
    }
  }
  return kartojasiVisuose;
}

console.log(uzd9(masyvas8, masyvas9, masyvas10));
console.groupEnd();

//10) Parašykte funkciją, kuri iš jai paduoto skaičių masyvo atrinktų n'tąjį skaičių. (iš funkcija([12,54,1,65,78,91,45],3) grąžintų 65).

console.groupCollapsed('10 uzduotis');

let masyvas11 = [12, 54, 1, 65, 78, 91, 45];

function uzd10(masyvas11, n) {
  return masyvas11[n];
}

console.log(uzd10(masyvas11, 3));

console.groupEnd();

