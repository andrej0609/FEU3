/*        JS Pagrindai
1) Kintamieji - laikyti informacija (duomenis).
    String (tekstas)
    Number (skaicius)
    Boolean (true/false)
    Array (sarasas)
    Object (objektas)
2) Operatoriai - veiksmas su kintamuoju arba kintamuju kombinacija.
    Matematiniai (+ - * / %) 
    Priskyrimo (=) 
    Palyginimo (== === != !== > < >= <=) 
    Logines (&& || !) 
3) Salygos  - veiksmus vykdyti pagal salyga.
    if (if else; if elseif else...)
    switch (case; break; default)
    ternary operator (salyga ? true : false) (salyga&&true)
4) Ciklai - kartoti veiksmus kol tenkina salyga.
    for (for in; for of) 
    while (do while) 
    iteraciniai metodai (map, filter, reduce, find, findIndex, sort, reverse)
5) Funkcijos
    deklaravimas (function name() {})
    anonimines   (function () {})
    arrow / lambda (const name = () => {})
    callback (function name(callback) {callback()})
6) Metodai - veiksmas su kintamuoju 
    Number/Math 
    String
    Array
    Object
7) Destrukturizavimas 
*/

//1) Pasirašyti / susikurti string kintamąjį.

const vardas = 'Vardenis';
const pavarde = 'Pavardenis';

//2) Pasirašyti / susikurti number kintmąjį.

const metai = 2021;
const amzius = 99;

//3) Pasirašyti / susikurti masyvą tik su string kintamaisiais.

const miestai = ['Vilnius', 'Nida', 'Kaunas', 'Klaipeda', 'Siauliai', 'Panevezys'];

//4) Pasirašyti / susikurti masyvą tik su number kintamaisiais.

const pazymiai = [10, 2, 8, 4, 6, 7];

//5) Pasirašyti / susikurti masyvą ir su string ir su number kintamaisiais.

const asmenys = ['Vardenis', 'Pavardenis', 2021, 99, 'Labas', 7, 8, 'Ate'];

//6) Išvesti pirmąją 1'os užduoties kintamojo raidę.

console.log(vardas[0]);

//7) Išvesti paskutinę 1'os užduoties kintamojo raidę.

console.log(vardas[vardas.length - 1]);

//8) Išvesti viduriniąją 1'os užduoties kintamojo raidę.

console.log(vardas[Math.floor(vardas.length / 2)]);

//9) Pasirašyti funkciją, kuri iš jai pateikto string kintamojo išvestų jai nurodytą raidę (kelintąją). Pvz.:(uzd9("labas", 3) => "b").

function uzd9(text, number) {
    return text[number - 1];
}

console.log(uzd9('labas', 3));

//10) Patikrinti ar 2'os užduoties kintamasis yra lyginis skaičius.

console.log(metai % 2 === 0);

//11) Patikrinti ar 2'os užduoties kintamasis yra nelyginis skaičius.

console.log(metai % 2 !== 0);

//12) Patikrinti ar 2'os užduoties kintamasis yra sveikasis skaičius.

console.log(Number.isInteger(metai));

//13) Parašyti funkciją, kuri pateiktų informaciją ar jai paduotas number kintamasis yra: lyginis/nelyginis skaičius. Pvz.: (uzd13(5) => nelyginis);

function uzd13(number) {
    return number % 2 === 0 ? 'lyginis' : 'nelyginis';
}

console.log(uzd13(6));

//14) Iš 3'čios užduoties masyvo išvesti tik ilgesnius nei 5 simbolių žodžius.
console.groupCollapsed('14 uzduotis');
for (let i = 0; i < miestai.length; i++) {
    if (miestai[i].length > 5) {
        console.log(miestai[i]);
    }
}
console.groupEnd();
//15) Iš 3'čios užduoties masyvo išvesti tik trumpesnius nei 8 simbolių žodžius.
console.groupCollapsed('15 uzduotis');
for (let i = 0; i < miestai.length; i++) {
    if (miestai[i].length < 8) {
        console.log(miestai[i]);
    }
}
console.groupEnd();

//16+) Parašyti funkciją, kuri iš 3'čios užduoties masyvo išvestų tik kiekvieno žodžio pirmąsias raides.

console.groupCollapsed('16 uzduotis');
function uzd16(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i][0]);
    }
}
uzd16(miestai);
console.groupEnd();

//17+) Parašyti funkciją, kuri iš 3'čios užduoties masyvo išvestų tik kiekvieno žodžio paskutiniąsias raides.

console.groupCollapsed('17 uzduotis');
function uzd17(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i][array[i].length - 1]);
    }
}
uzd17(miestai);
console.groupEnd();

//18++) Parašyti funkciją, kuri iš jai pateikto masyvo išvestų tik tuos žodžius, kurie yra ilgesni negu A, bet trumpesni negu B. Pvz.:(funkcija uzd18(masyvas, a, b) => uzd18(["Labas", "ate", "Katašunis"], 4, 8) => "Labas").

console.groupCollapsed('18 uzduotis');
function uzd18(array, a, b) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > a && array[i].length < b) {
            console.log(array[i]);
        }
    }
}
uzd18(miestai, 4, 8);
console.groupEnd();

//19) Sudėti visus 4'tos užduoties masyvo kintamuosius ir sumą išvesti į konsolę.

console.groupCollapsed('19 uzduotis');
let suma = 0;
for (let i = 0; i < pazymiai.length; i++) {
    suma += pazymiai[i];
}
console.log(suma);
console.groupEnd();

//20) Sudėti kas antrą 4'tos užduoties masyvo kintamąjį ir sumą išvesti į konsolę.

console.groupCollapsed('20 uzduotis');
let suma2 = 0;
for (let i = 0; i < pazymiai.length; i++) {
    if (i % 2 !== 0) {
        suma2 += pazymiai[i];
    }
}
console.log(suma2);
console.groupEnd();

//21+) Parašyti funkciją, kuriai padavus 4'tos užduoties masyvą, jinai sudėtų kas kažkelintą (nurodyti funkcijai) kintamąjį ir išvestų sumą į konsolę.

console.groupCollapsed('21 uzduotis');
function uzd21(array, number) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        if (i % number === 0) {
            suma += array[i];
        }
    }
    console.log(suma);
}
uzd21(pazymiai, 2);
console.groupEnd();

//22++) Parašyti funkciją, kuriai padavus 4'tos užduoties masyvą, jinai sudėtų kas kažkelintą (nurodyti funkcijai) kintamąjį tik tada, jeigu tas kintamasis yra lyginis arba nelyginis (nurodyti funkcijai) ir išvestų sumą į konsolę. Pvz.:(funk([1,2,3,4,5,6,7,8], 3, false) => 3)

console.groupCollapsed('22 uzduotis');
function uzd22(array, number, bool) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        if (i % number === 0 && array[i] % 2 === bool) {
            suma += array[i];
        }
    }
    console.log(suma);
}
uzd22(pazymiai, 2, false);
console.groupEnd();

//23) Iš 5'tos užduoties masyvo atrinkite skaičius į vieną masyvą, o string'us į kitą.

console.groupCollapsed('23 uzduotis');
let skaiciai = [];
let zodziai = [];
for (let i = 0; i < asmenys.length; i++) {
    if (typeof asmenys[i] === 'number') {
        skaiciai.push(asmenys[i]);
    } else {
        zodziai.push(asmenys[i]);
    }
}

console.log(skaiciai);
console.log(zodziai);
console.groupEnd();


