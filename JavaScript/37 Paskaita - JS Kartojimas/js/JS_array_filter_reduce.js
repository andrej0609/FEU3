//1) Susikurti bent 10 ilgio masyvą kaip nurodyta ir tolimesnėse užduotyse naudoti šitą masyvą. ( 1 ilgio pavyzdys: [{id:0, name:"Burgeris", inStock:true, primeCost:0.3, cost:1}]
console.groupCollapsed("1 užduotis");
const products = [
    {id:0, name:"Burgeris", inStock:true, primeCost:0.3, cost:1},
    {id:1, name:"Kebabas", inStock:true, primeCost:0.5, cost:1.5},
    {id:2, name:"Bulvytės", inStock:true, primeCost:0.1, cost:0.5},
    {id:3, name:"Dešrainis", inStock:true, primeCost:0.3, cost:0.5},
    {id:4, name:"Kebabas lekšteje", inStock:false, primeCost:1, cost:2},
    {id:5, name:"Bulvytės su šonine", inStock:true, primeCost:0.2, cost:0.7},
    {id:6, name:"Dešrainis su šonine", inStock:true, primeCost:0.4, cost:0.8},
    {id:7, name:"Bulvytės su sūriu", inStock:false, primeCost:0.2, cost:0.7},
    {id:8, name:"Dešrainis su sūriu", inStock:false, primeCost:0.4, cost:0.8},
    {id:9, name:"Bulvytės su sūriu ir šonine", inStock:true, primeCost:0.3, cost:0.9}
];
console.log(products);
console.groupEnd();

//2) Naudojant 1 užduoties masyvą:
//2.1) Naudojant filter - išfiltruoti tuos masyvo elementus, kurie yra inStock (inStock yra true) ir išsaugoti prafiltruotą masyvą naujame kintamajame ir jį atvaizduoti konsolėje.
console.groupCollapsed("2.1 užduotis");
const inStockProducts = products.filter(product => product.inStock);
console.log(inStockProducts);
console.groupEnd();

// 2.2) Naudojant map ir 2.1 masyvą - sukurti naują masyvą, kuriame būtų suskaičiuotas ir išsaugotas profit (cost-primeCost) ir jį atvaizduoti konsolėje.
console.groupCollapsed("2.2 užduotis");
const profit = inStockProducts.map(product => product.cost - product.primeCost);
console.log(profit);
console.groupEnd();

//2.3) Susikurti masyvą, kuriame būtų išrašyti masyvo (1'ojo) vardai ir jų kiekiai (sukurti užsakymo masyvą) ir jį atvaizduoti konsolėje. (galima sukurti kelis užsakymus)
console.groupCollapsed("2.3 užduotis");
const order = [
    {id:0, name:"Burgeris", quantity:2},
    {id:1, name:"Kebabas", quantity:1},
    {id:2, name:"Bulvytės", quantity:3},
    {id:3, name:"Dešrainis", quantity:1},
    {id:4, name:"Kebabas lekšteje", quantity:1},
    {id:5, name:"Bulvytės su šonine", quantity:2},
    {id:6, name:"Dešrainis su šonine", quantity:1},
    {id:7, name:"Bulvytės su sūriu", quantity:1},
    {id:8, name:"Dešrainis su sūriu", quantity:1},
    {id:9, name:"Bulvytės su sūriu ir šonine", quantity:1}
];
console.log(order);
console.groupEnd();

//  2.4) Naudojant reduce - suskaičiuoti kiek pelno suteiks 2.3 masyvo užsakymas ir tai atvaizduoti konsolėje. (arba užsakymai, jei 2.3 dalyje sukūrėte keletą užsakymų)
console.groupCollapsed("2.4 užduotis");
const profitFromOrder = order.reduce((total, product) => total + (product.quantity * (products[product.id].cost - products[product.id].primeCost)), 0);
console.log(profitFromOrder);
console.groupEnd();

// 2.5) Naudojant map - padaryti naują masyvą, kuriame būtų atvaizduotas užsakymas (kiek kokių dalykų buvo užsakyta) ir jo kaina (prie kiekvieno dalyko jo kaina(jei buvo keli, tai jų suma) ir pačiame gale bendra kaina) ir jį atvaizduoti konsolėje.
console.groupCollapsed("2.5 užduotis");
const orderWithPrice = order.map(product => {
    const productPrice = products[product.id].cost * product.quantity;
    return {...product, price: productPrice};
}
);
console.log(orderWithPrice);
console.groupEnd();

//3) Sukurti funkciją, kuri sukurtų A ilgio skaičių masyvą, B ir C intervale.  B - mažiausias galimas masyvo skaičius, C - didžiausias galimas masyvo skaičius). (naudoti Math.random())
console.groupCollapsed("3 užduotis");
const createArray = (length, min, max) => {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return array;
}
console.log(createArray(10, 1, 50));
console.groupEnd();

//4) Sukurti funkciją, kuri iš jai paduoto string'o sukurtų string'ų masyvą atskirdama kiekvieną žodį. (tarpai ir skiriamieji ženklai neturi būti įtraukti).
console.groupCollapsed("4 užduotis");
let string = "Labas, kaip sekasi? Manau, kad viskas gerai.";
const stringToArray = (string) => string.split(" ").map(word => word.replace(/[^a-zA-Z ]/g, ""));
console.log(stringToArray(string));
console.groupEnd();

//5) Naudojant 3'ios užduoties masyvą išfiltruoti lyginius skaičius.(array)
console.groupCollapsed("5 užduotis");
const evenNumbers = createArray(10, 1, 50).filter(number => number % 2 === 0);
console.log(evenNumbers);
console.groupEnd();

//6) Naudojant 3'ios užduoties masyvą išfiltruoti nelyginius skaičius
console.groupCollapsed("6 užduotis");
const oddNumbers = createArray(10, 1, 50).filter(number => number % 2 !== 0);
console.log(oddNumbers);
console.groupEnd();

//7) Naudojant 3'ios užduoties masyvą išfiltruoti sveikuosius skaičius.
console.groupCollapsed("7 užduotis");
const integerNumbers = createArray(10, 1, 50).filter(number => Number.isInteger(number));
console.log(integerNumbers);
console.groupEnd();

//8) Sukurti funkciją, kuri 3'ios užduoties masyvą išfiltruotų A ir B intervale (nuo skaičiaus A iki skaičiaus B imtinai).
console.groupCollapsed("8 užduotis");
const filterArray = (array, min, max) => array.filter(number => number >= min && number <= max);
console.log(filterArray(createArray(10, 1, 50), 3, 7));
console.groupEnd();

//9) Naudojant 4'tos užduoties masyvą išfiltruoti žodžius, kurie prasideda didžiąja raide. (naudoti string masyvą.)
console.groupCollapsed("9 užduotis");
const wordsWithBigLetter = stringToArray(string).filter(word => word[0] === word[0].toUpperCase());
console.log(wordsWithBigLetter);

console.groupEnd();

//10) Naudojant 4'tos užduoties masyvą išfiltruoti žodžius, kurie prasideda mažąja raide.
console.groupCollapsed("10 užduotis");
const wordsWithSmallLetter = stringToArray(string).filter(word => word[0] === word[0].toLowerCase());
console.log(wordsWithSmallLetter);
console.groupEnd();

//11) Sukurti funkciją, kuri iš 4'tos užduoties masyvo išfiltruotų nurodyta raide prasidedančius žodžius. 
console.groupCollapsed("11 užduotis");
const filterWordsByLetterStart = (array, letter) => array.filter(word => word[0] === letter);
console.log(filterWordsByLetterStart(stringToArray(string), "L"));
console.groupEnd();

//12) Sukurti funkciją, kuri iš 4'tos užduoties masyvo išfiltruotų nurodyta raide pasibaigiančius žodžius.
console.groupCollapsed("12 užduotis");
const filterWordsByLetterEnd = (array, letter) => array.filter(word => word[word.length - 1] === letter);
console.log(filterWordsByLetterEnd(stringToArray(string), "s"));
console.groupEnd();

//13) Naudojant reduce metodą suskaičiuoti 5'tos užduoties masyvo bendrą sumą.(evenNumbers)
console.groupCollapsed("13 užduotis");
const sumOfEvenNumbers = evenNumbers.reduce((sum, number) => sum + number, 0);
console.log(sumOfEvenNumbers);
console.groupEnd();

//14) Naudojant reduce metodą suskaičiuoti 6'tos užduoties masyvo bendrą sandaugą.
console.groupCollapsed("14 užduotis");
const productOfOddNumbers = oddNumbers.reduce((product, number) => product * number, 1);
console.log(productOfOddNumbers);
console.groupEnd();

