//1) Parašyti ciklą, kuris išspausdintų kiekvieną masyvo elementą.

console.groupCollapsed('1 uzduotis');
let mixMasivas = [5, 44, 'labas', 'rytas', true, false, 7, 78, 'ate', 9, 99, 'iki', 'viso', 77, 66, 'gero', 'vakaro'];
for (let i = 0; i < mixMasivas.length; i++) {
    console.log(mixMasivas[i]);
}
console.groupEnd();

//2) Parašyti ciklą, kuris išspausdintų kas trečią masyvo elementą.

console.groupCollapsed('2 uzduotis');
for (let i = 0; i < mixMasivas.length; i++) {
    if (i % 3 === 0) {
        console.log(mixMasivas[i]);
    }
}
console.groupEnd();

//3) Parašyti funkciją, kuri išspausdintų kas kažkelintą elementą iš jai pateikto masyvo.

console.groupCollapsed('3 uzduotis');
function uzd3(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (i % number === 0) {
            console.log(array[i]);
        }
    }
}
uzd3(mixMasivas, 2);
console.groupEnd();

//4) Parašyti ciklą, kuris iš masyvo išspausdintų tik elementus, kurių reikšmė didesnė negu 54.

console.groupCollapsed('4 uzduotis');
for (let i = 0; i < mixMasivas.length; i++) {
    if (mixMasivas[i] > 54) {
        console.log(mixMasivas[i]);
    }
}
console.groupEnd();

//5) Parašyti funkciją, kuri iš pateikto masyvo išspausdintų tik elementus, kurie prasideda nurodyta raide.

console.groupCollapsed('5 uzduotis');
function uzd5(array, letter) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'string' && array[i][0] === letter) {
            console.log(array[i]);
        }
    }
}
uzd5(mixMasivas, 'l');
console.groupEnd();

//6) Parašyti ciklą, kuris surikiuotų masyvą didėjimo tvarka. (tik su string ir tik su numbers (2ciklus)).
//6.1) su string function(a,b){return a-b}

console.groupCollapsed('6.1 uzduotis');
let stringMas = ['labas', 'rytas', 'ate', 'iki', 'viso', 'gero', 'vakaro'];
stringMas.sort(function(a,b){return a.localeCompare(b)})

console.log(stringMas);
console.groupEnd();

//6.2) su numbers function(a,b){return a-b}

console.groupCollapsed('6.2 uzduotis');
let numberMas = [5, 44, 7, 78, 9, 99, 77, 66];
numberMas.sort(function(a,b){return a-b});

console.log(numberMas);
console.groupEnd();

//7) Parašyti funkciją, kuri iš masyvo atrinktų tik lyginius skaičius, juos surikiuotų mažėjimo tvarka ir išspausdintų konsolėje.

console.groupCollapsed('7 uzduotis');
function uzd7(array) {
    let lygSk = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && array[i] % 2 === 0) {
            lygSk.push(array[i]);
        }
    }
    lygSk.sort(function(a,b){return b-a});
    console.log(lygSk);
}
uzd7(mixMasivas);
console.groupEnd();