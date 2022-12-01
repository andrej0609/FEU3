//          Kintamieji
/*
  Objektas - Object  -  {raktas: reiksme , raktas1: reiksme1 ......}
  Masyvas  - Array   -  [reiksme, reiksme, reiksme...]

  Tiek Objektas, tiek Masyvas yra konteineriniai kintamieji. Tai reiškia, kad ju viduje galima taplinti keleta reikšmiu ( gali buti skirtingu kintamuju tipu).

*/
//           Objektai
{
  console.groupCollapsed('Objektai');
let vardas = "Rokas";
let pavarde = "Banaitis";
let amzius = 26;
let vedes = false;

let zmogus = {
  vardas: "Rokas",
  pavarde: "Banaitis",
  amzius: 26,
  vedes: false,
  gyvenamojiVieta: {
    miestas: "Kaunas",
    salis: "Lietuva",
    zemynas: "Europa",
    planeta: "Zeme",
  }
};
console.log(zmogus.vardas)
console.log(zmogus.pavarde)
console.log(zmogus.amzius)
console.log(zmogus.vedes)
console.log(zmogus.gyvenamojiVieta.miestas)


let zmogus1 = {
  vardas: "Andrejus",
  pavarde: "Galkinas",
  amzius: 27,
  vedes: false
}
console.log(zmogus1);
zmogus1.ugis = 190;
console.log(zmogus1)
console.groupEnd();
}

//           Masyvai
{
  console.groupCollapsed('Masyvai');
/*  
let menesis1 = "Sausis";
let menesis2 = "Vasaris";
let menesis3 = "Kovas";
let menesis4 = "Balandis";
let menesis5 = "Geguze";
//........................
let menesiai = {
  pirmas: "Sausis",
  antras: "Vasaris",
  trecias: "Kovas"

}
*/
let menesiai = ["Sausis","Vasaris", "Kovas","Balandis","Geguze","Birzelis","Liepa","Rugpjutis", "Rugsejis","Spalis","Lapkritis","Gruodis"]
console.log(menesiai[10]);

let masyvas = [123, 458, 784,[1,2,3,4,5, "hello worls", false], false, true, "qwe123", "labas"];
console.log(masyvas);
console.log(masyvas[3][5]);
masyvas[1] = 'pakeistas';
masyvas.push("push"); // push - prie masyvo galo prideda nauja reiksme
masyvas.unshift("unshift"); // unshift - prie masyvo pradzios prideda nauja reiksme
console.log(masyvas);
let masyvoMetoduBandymai = masyvas.pop(); // pop - isima paskutini masyvo elementa
masyvoMetoduBandymai = masyvas.shift();  // shift - isima pirma mastvo elementa
masyvoMetoduBandymai = masyvas.length; // legnth - masyvo ilgio duomuo (number)
console.log(masyvas); 
console.log(masyvas[0]); 
console.log(masyvas[masyvas.length - 1]); 
console.groupEnd();
}

//           Masyvai ir Objektai
{
  console.groupCollapsed('Masyvai ir Objektai');
  let mixed1 = {
    vardas: "Andrejus",
    amzius: 27,
    vedes: false,
    gyvenamojiVieta: {
      miestas: "Vilnius",
      salis: "Lietuva",
      zemynas: "Europa"
    },
    pomegiai: ["sportas", "zaidimai", "filmai", "travel"]
  }
  console.log(mixed1.vardas + " turi " + mixed1.pomegiai.length + " pomėgių ")
  console.log("Vienas is " + mixed1.vardas + " pomiegiu yra " + mixed1.pomegiai[3] + ".")  
  console.log("Vienas is " + mixed1.vardas + " pomiegiu yra " + mixed1.pomegiai[Math.floor(Math.random()*mixed1.pomegiai.length)] + ".")  



  let mixed2 = [
    {
      vardas: "Andrejus",
      amzius: 26
    },
    {
      vardas: "Petras",
      amzius: 25
    },
    {
      vardas: "Olga",
      amzius: 29
    }
  ];
  console.log(mixed2)
  console.groupEnd();
}
//           Salygos
/*
  If Else
  Switch
  Ternary (max trumpintas if else)
    salyga? jeiguTiesa : jeiguMelas - if else
OR / And - galimas if salygu trumpinimas
*/
//           Ternary
{
  console.groupCollapsed('Ternary');
if(10 < 5){
  console.log("tiesa");
} else {
  console.log("melas");
}

10 < 5 ? console.log("tiesa") : console.log("melas");


let number = 10;
if(number > 20){
  console.log("20 -> infinity");
} else if(number <= 0){
  console.log("-infinity -> 0");
} else {
  console.log("0 -> 20");
}
number > 20 ? console.log("20 -> infinity") : number <= 0
              ? console.log("-infinity -> 0") : console.log("0 -> 20");
console.groupEnd();
}




//           TASKS
{
  console.groupCollapsed('Tasks');
//          Task1
let Vardas0 = "Andrejus";
let Vardas1 = 'Marius';
let Vardas3 = `Povilas`;
let Vardas4 = `Olga`;
let Vardas5 = `Jelena`;

let number1 = 27;
let number2 = 18;
let number3 = 25;
let number4 = 30;
let number5 = 35;

let bol1 = true;
let bol2 = false;
let bol3 = false;

//          Task2
// Masyvas
let country = ["France", "USA", "UK", "Belgia", "Spain", "Romania"];

// Objektas
let info = {
  vardas: "Andrejus",
  amzius: 27,
  vedes: false,
  ugis: 175,
  turiAugintini: true,
  turiAuto: true
}
//masyvas su masyvu
let zodis = ["Labas", "Hello",["why", "say", "tell", "because"], "Good Morning", "bye"];

  
// masyvas su objektu

let game = ["PC", "Mobile", "Console", "TV",
  {
    gameName: "Dota 2",
    gameName1: "Linage",
    gameName2: "Red dead redemption 2",
    gameName3: "GTA V"
  }
  
];



// objektas su objektu
  let automobilis = {
    marke: "Audi",
    kebuloTipas: "Sedanas",
    metai: 2012,
    kiekDuru: 4,
    kilmesSalis: {
      salis: "Vokietija",
      miestas: "Berlynas",
      zemynas: "Europa",
      planeta: "Zeme",
    }
  }
// objektas su masyvu
  let automobilis2 = {
    marke: "BMW",
    kebuloTipas: "Sedanas",
    metai: 2015,
    kiekDuru: 4,
    komplektacija: ["vibro vairas", "Odinis salonas", "led zibintai", "sildomos sedynes"]
  }    


//  3
  //3.1 
console.log(country[2]);
console.log(country[5]);
console.log(info.ugis);
console.log(info.vardas);

console.log(zodis[1]);
console.log(game[2]);
console.log(zodis[0], zodis[1], zodis[3][1]);
console.groupEnd();
}

//           Ciklai
/*
  for
  while

  do while
  for in
  for of
 

  Ciklai - yra kartojami nurodyti veiksmai, tol kol yra tenkinama salyga.
*/
//    for
/*
  for(iteratorius, salyga(suIteratoriumi), iteratoriausKitimas){
    //veiksmai
  }
  for naudojamas tuomet, kai gali apskaicioti/zinuoti kiek sykiu kartosis ciklas.
 */
{
/* console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);
*/
}
{console.groupCollapsed('Ciklai')
for(let i = 0; i < 10; i++){
  console.log(i+1);
}
console.groupEnd();
}

//          while
/*
  while(salyga){
    //veiksmai
  }
  while ciklas naudojamas tuomet, kai negali apskaicioti/zinoti kiek kartu reikes vykdyti cikla.
*/
{
  console.groupCollapsed('While')
let masyvas = [9,8,7,6,5,1,2,3,4,5,6,7,8,9];
console.log(masyvas);
while(masyvas.length){
  console.log(masyvas.shift());
}
console.log(masyvas);

let i = 1;
while(i <= 10){
console.log(i)
i++
}
console.groupEnd();
}


/*
for (let i = 1; i <= 50; i++) {
  if (i % 1 == 0) {
  console.log(i)   
}
}
*/

//        6
console.groupCollapsed('Task 6')

let skaiciuMasyvas = [];
for(let i = 0; i < 50; i++){
  skaiciuMasyvas.push(Math.floor(Math.random()*101));
}
console.log(skaiciuMasyvas);
console.groupEnd();
//      7
console.groupCollapsed('Task 7')

for (let i = 0; i < skaiciuMasyvas.length - 1; i=i+3){
  console.log(skaiciuMasyvas[i]);
 
}
console.groupEnd();


///     8
console.groupCollapsed('Task 8')

for (let i = skaiciuMasyvas.length - 1; i >= 0; i-=2){
  console.log(skaiciuMasyvas[i]);
}
console.groupEnd();


//      9
console.groupCollapsed('Task 9')

for (let i = 0; i <= skaiciuMasyvas - 1; i++) {
  if (skaiciuMasyvas[i] > 54){
    console.log(skaiciuMasyvas[i]);
  }
}
console.groupEnd();
//      10
// lyginiai
console.groupCollapsed('task10 Lyginiai')

let skaiciuMasyvas5 = [];
let i = 0;
while ( i <= 100 ) {
  skaiciuMasyvas5.push(Math.floor(Math.random()*101));
 console.log(i);
 i = i + 2;
}
console.groupEnd();

// Nelyginiai
console.groupCollapsed('task10 Nelyginiai')
for (let i = 1; i < 100; i += 1) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
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



