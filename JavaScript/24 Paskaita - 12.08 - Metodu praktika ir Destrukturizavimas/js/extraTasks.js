//1) Susikurti bent 10 ilgio masyvą kaip nurodyta ir tolimesnėse užduotyse naudoti šitą masyvą. ( 1 ilgio pavyzdys: [{id:0, name:"Burgeris", inStock:true, primeCost:0.3, cost:1}]

console.groupCollapsed("1) Susikurti bent 10 ilgio masyvą kaip nurodyta ir tolimesnėse užduotyse naudoti šitą masyvą.");

let produktai = [
    { id: 0, name: "Burgeris", inStock: true, primeCost: 0.3, cost: 1 },
    { id: 1, name: "Kebabas", inStock: true, primeCost: 0.5, cost: 1.5 },
    { id: 2, name: "Čeburekas ", inStock: true, primeCost: 0.1, cost: 0.5 },
    { id: 3, name: "Kibinas  ", inStock: false, primeCost: 0.2, cost: 0.7 },
    { id: 4, name: "Kebabas lavaše ", inStock: false, primeCost: 0.3, cost: 0.8 },
    { id: 5, name: "Salotos ", inStock: true, primeCost: 0.4, cost: 0.9 },
    { id: 6, name: "Pica su kumpiu, suriu ir ananasais", inStock: true, primeCost: 0.5, cost: 1 },
    { id: 7, name: "Balandeliai", inStock: false, primeCost: 0.6, cost: 1.1 },
    { id: 8, name: "Bulvytes", inStock: true, primeCost: 0.7, cost: 1.2 },
    { id: 9, name: "Ledai", inStock: false, primeCost: 0.8, cost: 1.3 },
];


console.groupEnd();

//2) Naudojant forEach - išvesti masyvą į konsolę.


console.groupCollapsed("2) Naudojant forEach - išvesti masyvą į konsolę.");

produktai.forEach((produktas) => console.log(produktas));

console.groupEnd();

// 3) Naudojant forEach - išvesti tik masyvo vardus ir kainas į konsolę.


console.groupCollapsed("3) Naudojant forEach - išvesti tik masyvo vardus ir kainas į konsolę.");

produktai.forEach((produktas) => console.log(produktas.name, produktas.cost));

console.groupEnd();

//4) Išfiltruoti (for{if{}}) tuos masyvo elementus, kurie yra inStock (inStock yra true) ir išsaugoti prafiltruotą masyvą naujame kintamajame ir jį atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)).

console.groupCollapsed("4) Išfiltruoti (for{if{}})");

let produktai2 = [];

produktai.forEach((produktas) => {
    if (produktas.inStock) {
        produktai2.push(produktas);
    }
}
);

console.log(produktai2);

console.groupEnd();

//4.1) Naudojant map ir 4'tos užduoties masyvą - sukurti naują masyvą, kuriame būtų name ir suskaičiuotas bei išsaugotas profit (cost-primeCost) ir jį atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)).

console.groupCollapsed("4.1) Naudojant map ir 4'tos užduoties masyvą - sukurti naują masyvą.");

let produktai3 = produktai2.map((produktas) => {
    return {
        name: produktas.name,
        profit: produktas.cost - produktas.primeCost
    }
});

console.log(produktai3);

console.groupEnd();


//4.2) Susikurti masyvą, kuriame būtų išrašyti masyvo (1'ojo) vardai ir jų kiekiai (sukurti užsakymo masyvą) ir jį atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)). (galima sukurti kelis užsakymus)

console.groupCollapsed("4.2) Susikurti masyvą, kuriame būtų išrašyti masyvo (1'ojo) vardai ir jų kiekiai");

let uzsakymas1 = [
    { id: 0, name: "Burgeris", kiekis: 2 },
    { id: 1, name: "Kebabas", kiekis: 1 },
    { id: 2, name: "Čeburekas ", kiekis: 3 },
    { id: 3, name: "Kibinas  ", kiekis: 1 },
    { id: 4, name: "Kebabas lavaše ", kiekis: 2 },
    { id: 5, name: "Salotos ", kiekis: 1 },
    { id: 6, name: "Pica su kumpiu, suriu ir ananasais", kiekis: 1 },
    { id: 7, name: "Balandeliai", kiekis: 1 },
    { id: 8, name: "Bulvytes", kiekis: 1 },
    { id: 9, name: "Ledai", kiekis: 1 },
];

console.log(uzsakymas1);


console.groupEnd();


// 4.3) Suskaičiuoti kiek pelno suteiks 4.2 masyvo užsakymas ir tai atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)). (arba užsakymai, jei 4.2 dalyje sukūrėte keletą užsakymų)

console.groupCollapsed("4.3) Suskaičiuoti kiek pelno suteiks 4.2 masyvo užsakymas ir tai atvaizduoti konsolėje");

let pelnas = 0;

uzsakymas1.forEach((uzsakymas) => {
    produktai.forEach((produktas) => {
        if (uzsakymas.name === produktas.name) {
            pelnas += (produktas.cost - produktas.primeCost) * uzsakymas.kiekis;
        }
    });
}
);

console.log(pelnas);

console.groupEnd();

// 4.4) Naudojant map - padaryti naują masyvą, kuriame būtų atvaizduotas užsakymas (kiek kokių dalykų buvo užsakyta) ir jo kaina (prie kiekvieno dalyko jo kaina(jei buvo keli, tai jų suma) ir pačiame gale bendra kaina) ir jį atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)).

console.groupCollapsed("4.4) Naudojant map - padaryti naują masyvą, kuriame būtų atvaizduotas užsakymas");

let map = new Map();

uzsakymas1.forEach((uzsakymas) => {
    produktai.forEach((produktas) => {
        if (uzsakymas.name === produktas.name) {
            if (map.has(uzsakymas.name)) {
                map.set(uzsakymas.name, map.get(uzsakymas.name) + uzsakymas.kiekis);
            } else {
                map.set(uzsakymas.name, uzsakymas.kiekis);
            }
        }
    });
});

console.log(map);

console.groupEnd();

//Destruktūrizavimas:

//1) Naudodami destructuring priskirkite 2 kintamiesiems 2 reikšmes.

console.groupCollapsed("1) Naudodami destructuring priskirkite 2 kintamiesiems 2 reikšmes");

let [a, b] = [1, 2];

console.log(a, b);

console.groupEnd();

//2) Naudodami destructuring priskirkite 10 kintamųjų 10 reikšmių.

console.groupCollapsed("2) Naudodami destructuring priskirkite 10 kintamųjų 10 reikšmių");

let [c, d, e, f, g, h, i, j, k, l] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(c, d, e, f, g, h, i, j, k, l);

console.groupEnd();

//3) Naudodami destructuring priskirkite 3 kintamiesiems 5 reikšmes.

console.groupCollapsed("3) Naudodami destructuring priskirkite 3 kintamiesiems 5 reikšmes");

let [m, n, o] = [1, 2, 3, 4, 5];

console.log(m, n, o);

console.groupEnd();

//4) Naudodami destructuring priskirkite 1 kintamajam visas reikšmes išskyrus pirmas 3.

console.groupCollapsed("4) Naudodami destructuring priskirkite 1 kintamajam visas reikšmes išskyrus pirmas 3.");

let [p, ...q] = [1, 2, 3, 4, 5];

console.log(p, q);

console.groupEnd();

//5) Naudodami destructuring priskirkite 3 kintamiesiems 3 reikšmes paimtas iš objekto.

console.groupCollapsed("5) Naudodami destructuring priskirkite 3 kintamiesiems 3 reikšmes paimtas iš objekto.");

let { r, s, t } = { r: 1, s: 2, t: 3 };
console.log(r, s, t);

let object = {
    vardas1: 'Adas',
    amzius1: 22,
    vieta1: 'Klaipeda'
}
let { vardas1, amzius1, vieta1 } = object;

console.log(vardas1, amzius1, vieta1);


console.groupEnd();

//6) Naudodami destructuring sukeiskite dvieju kintamųjų reikšmes.

console.groupCollapsed("6) Naudodami destructuring sukeiskite 2 kintamųjų reikšmes.");

let u = 1;
let v = 2;

[u, v] = [v, u];

console.log(u, v);