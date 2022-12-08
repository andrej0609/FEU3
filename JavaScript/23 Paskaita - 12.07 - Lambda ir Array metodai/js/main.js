//        Lambda/arrow function

// lambda syntax
/*
  parametras => veiksmas

  (parametras1, parametras2) => {return veiksmas} 

  (parametras1, parametras2) => {
    veiksmas1
    veiksmas2
    return ats;
  }

  let pavadinimas = (parametras1, parametras2) => {return veiksmas} 
*/
// lambda yra standartizuotas funkciju užrašymo budas nuo ECMA6 versijos (2015 metu). Jis yra trumpesnis, patogesnis, greitesnis.


//  senuoju  
function daugyba(par1, par2) {
  return par1 * par2;
}
// naujuoju (lambda/arrow)
let daugyba1 = (par1, par2) => par1 * par2;



//    Masyvu metodai
/*
  Iteraciniai masyvu metodai - iteruoja per masyva ir leidžia atlikti kažkoki veiksma su kiekviena iteracija.
  Naudinga tose situacijose neleidžiamas paprastas for'as arba for of'as.

  Svarbiausi:
  1)forEach() - Iteruoja per masyvo elementus, gražindamas kažkokius veiksmus


  2)map() - Gražina nauja kažkaip modifikuota masyva

  3)filter() - Gražina nauja masyva, kuris atitinka tam tikras salygas

  4)reduce() - Gražina reikšme, kuri susideda iš viso masyvo modifikuotu elementu judant nuo pradžios link galo.

  Mažiau svarbiausi:
  5)reduceRight() - Gražina reikšme, kuri susideda iš viso masyvo modifikuotu elementu judant nuo galo link pradžios.

  6)some() - Этот метод проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции. Он вернет значение true, если хотя бы один элемент совпадет с проверяемой функцией, и значение false — если нет.

  7)every() - Этот метод проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции. Он вернет значение true, если каждый элемент совпадет с проверяемой функцией, и значение false — если нет.

  8)find() - Этот метод принимает функцию в качестве аргумента и в дальнейшем применяет ее к массиву. Он возвращает значение элемента, найденного в массиве, если элемент удовлетворяет условию проверяющей функции. В противном случае оно возвращается со значением undefined.

  9)findIndex() - Этот метод принимает функцию в качестве параметра и в дальнейшем применяет ее к массиву. Он возвращает индекс найденного элемента, если элемент удовлетворяет условию проверяющей функции, переданной в качестве аргумента. Если не удовлетворяет, возвращается –1.

  10)findLast() - Метод findLast() перебирает массив в обратном порядке и возвращает значение первого элемента, удовлетворяющего предоставленной функции тестирования. Если никакие элементы не удовлетворяют функции тестирования, возвращается значение undefined.

  11)findLastIndex() - Метод findLastIndex() выполняет итерацию массива в обратном порядке и возвращает индекс первого элемента, который удовлетворяет предоставленной функции тестирования. Если никакие элементы не удовлетворяют функции тестирования, возвращается -1.

  12)flatMap() - Этот метод применяет функцию к каждому элементу массива, а затем сглаживает результат в новый массив. Он объединяет метод flat() и метод map() в одну функцию.


  14)concat() - Этот метод объединяет два или более массива/значения и возвращает новый массив.

  15)fill() - Этот метод заполняет все элементы массива одинаковым значением, от начального индекса (по умолчанию 0) до конечного индекса (по умолчанию array.length).

  16)indexOf/lastIndexOf и includes - Методы arr.indexOf, arr.lastIndexOf и arr.includes имеют одинаковый синтаксис и делают по сути то же самое, что и их строковые аналоги, но работают с элементами вместо символовю

  17) reverse() - Этот метод меняет порядок следования элементов в массиве на обратный. Первый элемент становится последним, а последний — первым.

*/

//forEach
/*
/* syntax for every iteration method except reduce, reduceRight, sort
  someArray.method(element => veiksmai)
  someArray.method((element, iteration) => veiksmai)
  someArray.method((element, iteration, array) => veiksmai)
*/
let mokinimuisiSkirtasMasyvas = [4,6,1,"zodziu",false,false,4,'naujas'];

// forEach - neatlieka kažko extra
/* minusai
  Negali būti sustabdytas (break)
  Negrąžina jokios reikšmės (return)
*/
console.groupCollapsed("forEach");
mokinimuisiSkirtasMasyvas.forEach(elementas => console.log("Masyvo elementas: ", elementas));
console.log('');
mokinimuisiSkirtasMasyvas.forEach((elementas, iteracija) => console.log("Masyvo "+ iteracija +" elementas: ", elementas));
console.log('');
mokinimuisiSkirtasMasyvas.forEach((elementas, iteracija, masyvas) => console.log("Masyvo "+ iteracija +" elementas: ", elementas, ';  Sekantis elementas yra: ', masyvas[iteracija+1]));
console.groupEnd();

// map - grąžina naują kažkaip modifikuotą masyvą.
let naujasMasyvas = mokinimuisiSkirtasMasyvas.map(element => element+5);
console.log(naujasMasyvas);
console.log(mokinimuisiSkirtasMasyvas);

// filter - grąžina naują masyvą, kuris atitinka nurodytą sąlygą
let naujasFiltruotasMasyvas = mokinimuisiSkirtasMasyvas.filter(element => typeof(element) === "string");
console.log(naujasFiltruotasMasyvas);
console.log(mokinimuisiSkirtasMasyvas);

// reduce - grąžina reikšmę, kuri susideda iš viso masyvo modifikuotų elementų
/*
someArray.reduce((bendras, elementas) => veiksmai)
someArray.reduce((bendras, elementas, iteracija) => veiksmai)
someArray.reduce((bendras, elementas, iteracija, array) => veiksmai)
someArray.reduce((bendras, elementas) ž> veiksmai, initialValue)
someArray.reduce((bendras, elementas, iteracija) => veiksmai, initialValue)
someArray.reduce((bendras, elementas, iteracija, array) => veiksmai, initialValue)

*/
let reduceintasMasyvas = mokinimuisiSkirtasMasyvas.reduce((bendras, elementas) => {
  console.log(bendras);
  return bendras + ' ' + elementas;
}, 'pradžia');
console.log(reduceintasMasyvas);
console.log(mokinimuisiSkirtasMasyvas);








// populiarus rikiavimo metodas - bubble sort
console.groupCollapsed("Bubble sort");
let skMas = [8, 15, 4, 58, 63, 5, 4, 6, 38, 411, 45,];
function skaiciuSortas(a, b) {
  return a - b;
}
skMas.sort(skaiciuSortas);
console.log(skMas);

skMas.sort((a, b) => a - b);
console.log(skMas);

let zodMas = ['labas', 'koks', 'tavo', 'halo', 'vardas'];
console.log(zodMas.sort((a, b) => a.localeCompare(b)));
console.groupEnd();



//Destrukturizacija - kažkokio elemento/u išskirstymas dalimis.
/*
  array destructuring  syntax
  let [a, b] = masyvas; (priskirymas paeiliui)
  let [a, , b] = masyvas; (elemento praleidimas)
  let [a, b, ...c] = masyvas; (likusiu elementu priskirymas...)
  let [a = 'default value', b, ...c] = masyvas; (galima priskirti numatytas reikšmės, kurios bus priskirtos tokiu atveju, kai destrukturizuojamame elemente ta reikšme bus undefined)

  object destructuring syntax
  let {a, b} = objektas; (priskirymas pagal raktinius žodzius)
  let {a, b : kitasB} = objektas; (priskirymas pagal pervadintą raktinį žodį)
  let {a, b : kitasB, ...like} = objektas; (prikirymas neparinktu elementu)
  let {a, b : kitasB, c = "c default", ...like} = objektas; (nerastų raktinių žodžių default reikšmės nustatymas)
*/

//arr be destr...
let masyvas = [ undefined, 'labas', 54, true, 'pomidorai', 54, 78];
let a = masyvas[0];
let b = masyvas[1];
console.log(a, b);

//arr su destr...
let [z, , x, ...q] = masyvas;
console.log(z, x, q);

//function
let destrF = (arg1, arg2, ...args) => {
  console.log(arg1, arg2, args);
}
destrF(1,2,3,4,5,6,7,8,9,10);

//obj be destr...
let objektas = {
  vardas: 'Jonas',
  amzius: 25,
  lytis: 'vyras',
  gyvenamojiVieta: {
    miestas: 'Vilnius',
    gatve: 'Gedimino pr.',
    namoNr: 5,
  },
  batai: "Žieminiai",
  pavarde: "Jonaitis",
}
//let vardas = objektas1.vardas;
//let amzius = objektas1.amzius;
//console.log(vardas, amzius);

let {amzius, vardas: pilnasVardas, pavarde = "Pavardenis", ...kitas} = objektas;
console.log(pilnasVardas, amzius, pavarde, kitas); 