// Tasks

//1) Parašykite lambda, kuri grąžina tekstą "Labas!".
console.groupCollapsed("1) Parašykite lambda, kuri grąžina tekstą 'Labas!'.");
let uzd1 = () => "Labas";
console.log(uzd1());

let text = (text) => console.log(text);
text("Labas");
console.groupEnd();

//2) Parašykite lambda, kuri grąžina dviejų kintamųjų sudėtį.
console.groupCollapsed("2) Parašykite lambda, kuri grąžina dviejų kintamųjų sudėtį.");

let sudetis = (par1, par2) => par1 + par2;

console.groupEnd();

//3) Parašykite lambda, kuri grąžina jai paduoto teksto ilgį.
console.groupCollapsed("3) Parašykite lambda, kuri grąžina jai paduoto teksto ilgį.");
let uzd3 = (text) => console.log(text.length);
uzd3('Benamis');

console.groupEnd();

//4) Parašykite lambda, kuri grąžina jai paduoto teksto pirmąją raidę.

console.groupCollapsed("4) Parašykite lambda, kuri grąžina jai paduoto teksto pirmąją raidę.");
let pirmaRaide = (text) => text.charAt(0);


console.groupEnd();

//5) Parašykite lambda, kuri grąžina jai paduoto teksto paskutinę raidę.
console.groupCollapsed("5) Parašykite lambda, kuri grąžina jai paduoto teksto paskutinę raidę.");

let paskutineRaide = (text) => console.log(text[6]);
paskutineRaide('Benamis');

console.groupEnd();

//6) Parašykite lambda, kuri grąžina jai paduoto skaičiaus kvadratą.
console.groupCollapsed("6) Parašykite lambda, kuri grąžina jai paduoto skaičiaus kvadratą.");
let pow2 = (number) => number ** 2;
console.groupEnd();
//7+) Parašykite lambda, kuri iš jai paduoto masyvo išveda visus kintamuosius į konsolę.
console.groupCollapsed("7+) Parašykite lambda, kuri iš jai paduoto masyvo išveda visus kintamuosius į konsolę.");

let masyvas = [
  'Peter Griffin',
  'Stewie Griffin',
  'Brian Griffin',
  'Lois Griffin'
];
let uzd7 = (text) => text(masyvas);
console.log(masyvas);

console.groupEnd();

//8+) Parašykite lambda, kuri iš jai paduoto masyvo išveda kas antrą kintamąjį į konsolę.
console.groupCollapsed("8+) Parašykite lambda, kuri iš jai paduoto masyvo išveda kas antrą kintamąjį į konsolę.");

let uzd8 = (masyvas) => {
  for (let i = 0; i < masyvas.length; i += 2) {
    console.log(masyvas[i]);
  }
}
uzd8(masyvas);

console.groupEnd();

//9++) Parašykite lambda, kuri iš jai paduoto masyvo išveda kas kažkelintą (nurodytą) kintamąjį į konsolę.
console.groupCollapsed("9++) Parašykite lambda, kuri iš jai paduoto masyvo išveda kas kažkelintą (nurodytą) kintamąjį į konsolę.");
let uzd9 = (masyvas, kasKelintas) => {
  for (let i = 0; i < masyvas.length; i += kasKelintas) {
    console.log(masyvas[i]);
  }
}
uzd9(masyvas, 3);

console.groupEnd();

//10+) Parašykite lambda, kuri iš jai paduoto skaičių masyvo į konsolę išveda tik lyginius skaičius.
console.groupCollapsed("10+) Parašykite lambda, kuri iš jai paduoto skaičių masyvo į konsolę išveda tik lyginius skaičius.");

const outputEvenNumbers = (numbers) => {
  for (let number of numbers) {
    if (number % 2 === 0) {
      console.log(number);
    }
  }
};

outputEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.groupEnd();

//11) Parašykite lambda, kuri iš jai paduoto skaičių masyvo į konsolę išveda tik nelyginius skaičius. 
console.groupCollapsed("11) Parašykite lambda, kuri iš jai paduoto skaičių masyvo į konsolę išveda tik nelyginius skaičius.");

const outputOddNumbers = (numbers) => {
  numbers.forEach((number) => {
    if (number % 2 !== 0) {
      console.log(number);
    }
  });
};
outputOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.groupEnd();

//12+) Parašykite lambda, kuri iš jai paduoto string masyvo į konsolę išveda tik žodžius ilgesnius nei 3 simbolių.
console.groupCollapsed("12+) Parašykite lambda, kuri iš jai paduoto string masyvo į konsolę išveda tik žodžius ilgesnius nei 3 simbolių.");


let ilgesniUz3 = (vardai) => {
  for (i = 0; i < vardai.length; i++) {
    if (vardai[i].length > 3) {
      console.log(vardai[i]);
    }
  }
}

console.groupEnd();

// 13++) Parašykite lambda, kuri iš jai paduoto string masyvo į konsolę išveda tik žodžius, kurie prasideda kažkokia nurodyta raide.
console.groupCollapsed("13++) Parašykite lambda, kuri iš jai paduoto string masyvo į konsolę išveda tik žodžius, kurie prasideda kažkokia nurodyta raide.");

let vardai = ["Jonas", "Petras", "Antanas", "Tomas", "Povilas", "Rokas", "Viktoras", "Vaidas", "Mantas", "Darius", "Gintaras", "Marius", "Rimas", "Rytis", "Rimantas", "Rokas", "Romas", "Raimondas", "Raimund"];

let raide = "R";

let vardaiSuRaide = (vardai, raide) => {
  for (i = 0; i < vardai.length; i++) {
    if (vardai[i].charAt(0) == raide) {
      console.log(vardai[i]);
    } 
  } 
} 
vardaiSuRaide(vardai, raide);

console.groupEnd();


//14+++) Parašykite lambda, kuri iš jai paduoto string masyvo į konsolę išveda tik žodžius, kurie yra ilgesni nei A, bet trumpesni nei B ir prasideda mažąja raide. (A - trumpiausias galimas žodžio ilgis, B - ilgiausias galimas žodžio ilgis).,

console.groupCollapsed("14+++) Parašykite lambda, kuri iš jai paduoto string masyvo į konsolę išveda tik žodžius, kurie yra ilgesni nei A, bet trumpesni nei B ir prasideda mažąja raide.");

let ipatingiVardai = (masyvas, ilgesniNei, trumpesniNei) => {
  for (i = 0; i < masyvas.length; i++) {
    if (masyvas[i].length > ilgesniNei && masyvas[i].length < trumpesniNei && masyvas[i].charAt(0) == masyvas[i].charAt(0) == masyvas[i].charAt(0).toLowerCase()) {
      console.log(masyvas[i])
    } else { }
  }
}
ipatingiVardai(vardai, 3, 7);
console.groupEnd();

//15+) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su string kintamaisiais.
console.groupCollapsed("15+) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su string kintamaisiais.");

let masyvas4 = ["Sveiki", "konsolę", 55, "UK", "BigDaddy", 6,45,"telia", "Karvutis"]
let stringuMasyvas = [];

let tikStringai = (masyvas) => {
  for (i = 0; i < masyvas.length; i++) {
    if (typeof masyvas[i] == "string") {
      stringuMasyvas.push(masyvas[i]);
    } else { }
  } console.log(stringuMasyvas);
}

console.groupEnd();

//16++) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su string kintamaisiais, kurie yra ilgesni nei A. (A - trumpiausias galimas žodžio ilgis).
console.groupCollapsed("16++) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su string kintamaisiais, kurie yra ilgesni nei A.");

let ilgesniStringuMasyvas = [];

let ilgesniStringai = (masyvas, daugiauNei) => {
  for ( i= 0; i < masyvas.length; i++)
  { if (typeof(masyvas[i]) == 'string' && masyvas[i].length > daugiauNei ){
    ilgesniStringuMasyvas.push(masyvas[i]);
  } else {}
  } console.log(ilgesniStringuMasyvas);
}
ilgesniStringai(masyvas4, 4);

console.groupEnd();


//17++) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su string kintamaisiais, kurie prasideda didžiąja raide.

console.groupCollapsed("17++) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su string kintamaisiais, kurie prasideda didžiąja raide.");

const uzd17 = ['hello', 99, 'World', 58, 'this', 1, 'Is', 'a', 'Test'];
const strings = (uzd17) => uzd17.filter(x => typeof x === 'string' && x.charAt(0) === x.charAt(0).toUpperCase());

console.log(strings(uzd17));

console.groupEnd();



//18+) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su number kintamaisiais.

console.groupCollapsed("18+) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su number kintamaisiais.");
const uzd18 = [1, 'hello', 3, 'labas', 5];
const numbers5 = (uzd18) => uzd18.filter(x => typeof x === 'number');

console.log(numbers5(uzd18));

console.groupEnd();


//19+) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su number kintamaisiais, kurie yra didesni negu A. (A - mažiausias galimas skaičius).

console.groupCollapsed("19+) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su number kintamaisiais");

const uzd19 = [1, 'hello', 3, 'labas', 5];
const numbers6 = (uzd19) => uzd19.filter(x => typeof x === 'number' && x > 3);

console.log(numbers6(uzd19));

console.groupEnd();




//tasks
//1  Parašykite funkciją, kuri iš jai duotojo masyvo suformuotų ir grąžintų string'ą.

console.groupCollapsed("1");

let zodziuMasyvas = ["Labas", "rytas", "Lietuva"];

let uzd_1_task = (masyvas) => {
  let naujasStringas = "";
  for (let i = 0; i < masyvas.length; i++) {
    naujasStringas += masyvas[i] + " ";
  }
  return naujasStringas;
}
console.log(uzd_1_task(zodziuMasyvas));

console.groupEnd();

//2 Parašykite funkciją, kuri atliktų tą patį, ką daro .reverse() metodas. (žinoma nenaudokite reverse)

console.groupCollapsed("2");

let uzd_2_task = (masyvas) => {
  let naujasMasyvas = [];
  for (let i = masyvas.length - 1; i >= 0; i--) {
    naujasMasyvas.push(masyvas[i]);
  }
  return naujasMasyvas;
}
console.log(uzd_2_task(zodziuMasyvas));

console.groupEnd();


//3  Parašykite funkciją, kuri iš jai paduoto masyvo randa ir išspausdina didžiausią ir mažiausią skaičius. (galima su forEach arba paprastu for)

console.groupCollapsed("3");

let skaiciuMasyvas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let uzd_3_task = (masyvas) => {
  let didziausias = masyvas[0];
  let maziausias = masyvas[0];
  for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i] > didziausias) {
      didziausias = masyvas[i];
    }
    if (masyvas[i] < maziausias) {
      maziausias = masyvas[i];
    }
  }
  console.log("Didziausias skaicius: " + didziausias);
  console.log("Maziausias skaicius: " + maziausias);
}
uzd_3_task(skaiciuMasyvas);


console.groupEnd();


//4 Parašykite funkciją, kuri iš 2 jai paduotų masyvų grąžina(išveda į konsolę) pasikartojančias reikšmes. (jeigu yra dvi vienodos reikšmės abejuose masyvuose, ta reikšmė turi būti išvesta į konsolę.

console.groupCollapsed("4");

let masyvas1 = [1, 25, 3, 4, 55, 6, 77, 8, 59, 10];
let masyvas2 = [1, 2, , 4, 5, 65, 7, 8, 59, 10];

let uzd_4_task = (masyvas1, masyvas2) => {
  for (let i = 0; i < masyvas1.length; i++) {
    for (let j = 0; j < masyvas2.length; j++) {
      if (masyvas1[i] === masyvas2[j]) {
        console.log(masyvas1[i]);
      }
    }
  }
}
uzd_4_task(masyvas1, masyvas2);

console.groupEnd();

//5) Parašykite funkciją, kuriai padavus du masyvus (pirmas: informacijos, antras: indeksų), suformuotų naują masyvą iš pirmojo, paimdamas tik tas reikšmes, kurios nurodytos indeksuose. (pirmas=["a","b","c","d","e","f"], antras=[0,3,4], naujas=["a","d","e"])

console.groupCollapsed("5");

let raidziuMasyvas = ["a", "b", "c", "d", "e", "f"];
let skaicMasyvas = [0, 3, 4];

let uzd_5_task = (masyvas1, masyvas2) => {
  let naujasMasyvas = [];
  for (let i = 0; i < masyvas2.length; i++) {
    naujasMasyvas.push(masyvas1[masyvas2[i]]);
  }
  return naujasMasyvas;
}
console.log(uzd_5_task(raidziuMasyvas, skaicMasyvas));


console.groupEnd();


