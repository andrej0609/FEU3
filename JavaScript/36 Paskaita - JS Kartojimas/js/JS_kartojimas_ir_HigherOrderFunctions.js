//1.1) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto skaičių masyvo grąžintų tik tuos skaičius, kurie yra didesni nei A.
console.groupCollapsed('Užduotis 1.1')
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let A = 5;

function biggerThanA(arr, A) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > A) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(biggerThanA(arr, A));
console.groupEnd()

//1.2) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto skaičių masyvo grąžintų tik tuos skaičius, kurie yra didesni nei A, bet mažesni nei B.
console.groupCollapsed('Užduotis 1.2')
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let A2 = 3;
let B2 = 8;

function biggerThanAandSmallerThanB(arr, A, B) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > A && arr[i] < B) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(biggerThanAandSmallerThanB(arr2, A2, B2));
console.groupEnd()

//1.3) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto skaičių masyvo grąžintų tik tuos skaičius, kurie yra didesni nei A, bet mažesni nei B ir yra lyginiai arba nelyginiai (true/false).
console.groupCollapsed('Užduotis 1.3')
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,15,20, 23, 54, 67, 89, 100];
let A3 = 3;
let B3 = 67;
let even = true;

function DidesniArmazesni(arr, A3, B3, even) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > A3 && arr[i] < B3 && arr[i] % 2 === 0 && even === true) {
      result.push(arr[i]);
    } else if (arr[i] > A3 && arr[i] < B3 && arr[i] % 2 !== 0 && even === false) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(DidesniArmazesni(arr3, A3, B3, even));
console.groupEnd()

//1.4) Naudodami ką norite (lambda, metodus, kitų funkcijų kvietimus jūsų funkcijose ir pns.) perrašykite 1.1, 1.2 ir 1.3 užduotis.
console.groupCollapsed('Užduotis 1.4')
console.groupCollapsed('Užduotis 1.4.1')
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let A4 = 5;

function biggerThanA(arr, A) {
  return arr.filter(x => x > A);
}

console.log(biggerThanA(arr4, A4));
console.groupEnd()

console.groupCollapsed('Užduotis 1.4.2')
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let A5 = 3;
let B5 = 8;

function biggerThanAandSmallerThanB(arr, A, B) {
  return arr.filter(x => x > A && x < B);
}

console.log(biggerThanAandSmallerThanB(arr5, A5, B5));
console.groupEnd()

console.groupCollapsed('Užduotis 1.4.3')
let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let A6 = 3;
let B6 = 8;
let even2 = true;

function DidesniArmazesni(arr, A, B, even2) {
  return arr.filter(x => x > A && x < B && x % 2 === 0 && even2 === true || x > A && x < B && x % 2 !== 0 && even2 === false);
}

console.log(DidesniArmazesni(arr6, A6, B6, even2));
console.groupEnd()
console.groupEnd()

//2.1) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto string masyvo grąžintų tik tuos žodžius, kurie yra ilgesni negu A.
console.groupCollapsed('Užduotis 2.1')
let arr7 = ['Labas', 'rytas', 'Lietuva', 'sveikas', 'pasaulyje'];
let A7 = 5;

function biggerThanA(arr, A) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > A) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(biggerThanA(arr7, A7));
console.groupEnd()

//2.2) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto string masyvo grąžintų tik tuos žodžius, kurie yra ilgesni negu A, trumpesni negu B.
console.groupCollapsed('Užduotis 2.2')
let A8 = 3;
let B8 = 7;

function ilggesniNeguAtrumpesniNeguB(arr, A, B) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > A && arr[i].length < B) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(ilggesniNeguAtrumpesniNeguB(arr7, A8, B8));

console.groupEnd()

//2.3) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto string masyvo grąžintų tik tuos žodžius, kurie yra ilgesni negu A, trumpesni negu B ir prasideda didžiąja arba mažąja raidėmis (true/false).

console.groupCollapsed('Užduotis 2.3')
let A9 = 5;
let B9 = 8;
let firstLetter = true;

function biggerThanAandSmallerThanB(arr, A, B, firstLetter) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > A && arr[i].length < B && arr[i][0] === arr[i][0].toUpperCase() && firstLetter === true) {
      result.push(arr[i]);
    } else if (arr[i].length > A && arr[i].length < B && arr[i][0] === arr[i][0].toLowerCase() && firstLetter === false) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(biggerThanAandSmallerThanB(arr7, A9, B9, firstLetter));
console.groupEnd()

//2.4) Naudodami ką norite (lambda, metodus, kitų funkcijų kvietimus jūsų funkcijose ir pns.) perrašykite 2.1, 2.2 ir 2.3 užduotis.
console.groupCollapsed('Užduotis 2.4')
console.groupCollapsed('Užduotis 2.4.1')

let A10 = 5;

function biggerThanA(arr, A) {
  return arr.filter(x => x.length > A);
}

console.log(biggerThanA(arr7, A10));
console.groupEnd()

console.groupCollapsed('Užduotis 2.4.2')
let A11 = 5;
let B11 = 8;

function biggerThanAandSmallerThanB(arr, A, B) {
  return arr.filter(x => x.length > A && x.length < B);
}

console.log(biggerThanAandSmallerThanB(arr7, A11, B11));
console.groupEnd()
//Naudodami ką norite (lambda, metodus, kitų funkcijų kvietimus jūsų funkcijose ir pns.) perrašykite 2.2  užduoti.
console.groupCollapsed('Užduotis 2.4.3')
let A12 = 3;
let B12 = 7;
let firstLetter2 = true;

function biggerThanAandSmallerThanB(arr, A, B, firstLetter) {
  return arr.filter(x => x.length > A && x.length < B && x[0] === x[0].toUpperCase() && firstLetter === true || x.length > A && x.length < B && x[0] === x[0].toLowerCase() && firstLetter === false);
}

console.log(biggerThanAandSmallerThanB(arr7, A12, B12, firstLetter2));

console.groupEnd()
console.groupEnd()

//3) Parašykite funkciją, kuri iš mišraus masyvo atrinktų tik number arba tik string kintamuosiuos (true/false).
console.groupCollapsed('Užduotis 3')

let arr9 = [1, 2, 3, 'Labas', 'rytas', 'Lietuva', 'sveikas', 'pasauli', 4, 9, 7, 5, 8, 6, 10, 'ate'];

function onlyNumbersOrStrings(arr, onlyNumbers) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && onlyNumbers === true) {
      result.push(arr[i]);
    } else if (typeof arr[i] === 'string' && onlyNumbers === false) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(onlyNumbersOrStrings(arr9, true));
console.log(onlyNumbersOrStrings(arr9, false));
console.groupEnd()

//3.1.1)  3 užduoties skaičius, surikiuoti didėjimo arba mažėjimo tvarka (true/false) ir grąžintų sutvarkytą masyvą.
//3.1.2) Prie 3.1.1 pridėti ir dydžio tikrinimą (ne mažesni negu A ir ne didesni negu B skaičiai (A<skaičius<B)).
console.groupCollapsed('Užduotis 3.1.1')
let A13 = 5;
let B13 = 10;
let order = true;

function onlyNumbers(arr, onlyNumbers, A, B, order) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && onlyNumbers === true && arr[i] > A && arr[i] < B) {
      result.push(arr[i]);
    }
  }
  if (order === true) {
    return result.sort((a, b) => a - b);
  } else {
    return result.sort((a, b) => b - a);
  }
}

console.log(onlyNumbers(arr9, true, A13, B13, order));
console.groupEnd()

//3.2.1) Jeigu atrinkinėja žodžius, tai juos surikiuoti pagal abėcėlę A->Z arba Z->A (true/false) ir grąžintų sutvarkytą masyvą.
//3.2.2) Prie 3.2.1 pridėti ir ilgio tikrinimą (ne trumpesni negu A ir ne ilgesni negu B žodžiai (A<=žodis.length<=B)).
console.groupCollapsed('Užduotis 3.2.1')
let A14 = 5;
let B14 = 10;
let order2 = true;

function onlyStrings(arr, onlyNumbers, A, B, order2) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string' && onlyNumbers === false && arr[i].length >= A && arr[i].length <= B) {
      result.push(arr[i]);
    }
  }
  if (order2 === true) {
    return result.sort();
  } else {
    return result.sort().reverse();
  }
}

console.log(onlyStrings(arr9, false, A14, B14, order2));
console.groupEnd()




//extra1) Nenaudodami lambda sukurkite funkciją, kuri su callback galėtų grąžinti papildomą informaciją (kokią informaciją nesvarbu. Gali būti string + string iš callback jei jis yra).
console.groupCollapsed('Užduotis extra1')
let string = 'Sveikas';

function extra1(string, callback) {
  return callback(string);
}

console.log(extra1(string, function (string) {
  return string + ' pasauli';
}
));
console.groupEnd()

