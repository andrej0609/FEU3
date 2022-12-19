//            KLASĖS
/*
 Klasė yra objektų kūrimo šablonas.
 Klasė privalo būti aprašyta prieš jos naudojimą.
 Klasių pavadinimai prasideda didžiąja raidė.
 Klasės konstruktoriuje "this" yra privalomas.
*/
/*
  syntax: 
  class KlasėsPavadinimas {
    constructor(parametrai, ... ) {
      this.kintamasis = parametras;
      this.kintamasis = parametras;
    }
    metodas...
*/

// Kuriame objektų masyvą be klasių

let asmenysBeKlasiu = [
  {
    vardas: "Jonas",
    amzius: 25,
    turiVaiku: true
  }, {
    vardas: "Petras",
    amzius: 30,
    turiVaiku: false
  }
];

// Kuriame objektų masyvą su klasėmis
{
  class Asmuo {
    constructor(vardas, amzius, turiVaiku) {
      this.vardas = vardas.split(" ")[0];
      this.pavarde = vardas.split(" ")[1];
      this.amzius = amzius;
      this.turiVaiku = turiVaiku;
    }
    pasisveikinaSU(vardas) {
      return this.vardas + " pasisveikina su " + vardas;
    }
  }

  let asmenysSuKlase = [
    new Asmuo("Jonas Jonaitis", 25, true),
    new Asmuo("Petras Petraitis", 30, false),
    new Asmuo("Antanas Antanauskas", 35, true)
  ];

  console.log(asmenysSuKlase);
  console.log(asmenysSuKlase[0].pasisveikinaSU("Petras"));
}


class Ledai {
  constructor(pavadinimas, skonis, kaina) {
    this.pavadinimas = pavadinimas;
    this.skinis = skonis;
    this.kaina = kaina;
  }
  kainosPakeitimas(keitimasProcentais) { //neigiamas % sumažina, teigiamas % padidina
    //Pamažinti kainą visiems ledams 37%
    return this.kaina + this.kaina * keitimasProcentais / 100;


  }
}

const leduMasyvas = [
  new Ledai("Dadu", "karamelinis", 1.225),
  new Ledai("Tirpuko", "avietiniai", 0.4947),
  new Ledai("Nykštukas", "vanilinis", 1.589)
];

console.log(leduMasyvas);

//Atspausdinti visus ledus
console.groupCollapsed("Ledų pavadinimai");
leduMasyvas.forEach(ledas => console.log(ledas.pavadinimas));

console.groupEnd();

console.groupCollapsed("Ledų skoniai");
leduMasyvas.forEach(ledas => console.log(ledas.skinis));

console.groupEnd();

console.groupCollapsed("Ledų kainos");
leduMasyvas.forEach(ledas => console.log(ledas.kaina.toFixed(2)));

console.groupEnd();

//Pamažinti kainą visiems ledams 37%
console.groupCollapsed("Ledų kainos po kainos pakeitimo");

leduMasyvas.forEach(ledas => console.log(ledas.kainosPakeitimas(-37).toFixed(2)));

console.groupEnd("Padidinom ledų kainų duomenis 10%");

//pakeisti pagrindine kaina
console.groupEnd();

leduMasyvas.forEach(ledas => {
  ledas.kaina += 0.1;
  console.log(ledas.kaina.toFixed(2));
});

console.groupEnd();


//1) Sukurkite klasę vardu "Car" ir duokite jai "name" ir "year" parametrus.

//) Sukurkite papildomą parametrą "helloCar" ir priskirkite jam tekstą, pristatantį mašiną. (gali būti betkas, tarkim "Labas, čia mano mašina Volvo ir ji buvo pagaminta 1990 metais").

//) Skukurkite metodą "age", kuris apskaičiuotų ir grąžintų tekstą, pasakantį kiek mašinai metų. (dabartinę datą gauti galima su 'date = new Date()' ir paversti tik į metus su 'date.getFullYear()').
console.groupCollapsed("1");
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
    this.helloCar = "Labas, čia mano mašina " + this.name + " ir ji buvo pagaminta " + this.year + " metais";
  }
  age() {
    let date = new Date();
    let year = date.getFullYear();
    return year - this.year;
  }
}

let car = new Car("Volvo", 1990);
console.log(car);
console.log(car.helloCar);
console.log(car.age());


console.groupEnd();

//2) Sukurkite klasę vardu "Rectangle" ir duokite jai "width" ir "height" parametrus.
// 2.1) Sukurkite papildomą parametrą "color" ir priskirkite jam randomly parinktą spalvą.
// 2.2) Sukurkite metodą "area", kuris grąžina stačiakampio plotą.
// 2.3) Sukurkite metodą "perimeter", kuris grąžina stačiakampio perimetrą.
console.groupCollapsed("2");
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.color = Math.floor(Math.random()*16777215).toString(16);
  }
  area() {
    let plotas = this.width * this.height;
    return plotas;
  }
  perimeter() {
    let perimetras = this.width * 2 + this.height * 2;
    return perimetras;
  }
}

let rectangle = new Rectangle(10, 20);
console.log(rectangle);
console.log(rectangle.area());
console.log(rectangle.perimeter());

console.groupEnd();

//3) Sukurkite klasę vardu "Point" ir duokite jai "x" ir "y" parametrus.
//3.1) Sukurkite metodą "coordinates", kuris grąžina "x" ir "y" reikšmes.(x;y)
//3.2) Sukurkite metodą "distance", kuris grąžina atstumą tarp dviejų taškų (Point'ų). (siūlau naudoti Math.hypot() metodą).

console.groupCollapsed("3");
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  coordinates() {
    return `${this.x};${this.y}`;
  }

  distance(point) {
    /*return Math.hypot(this.x - point.x, this.y - point.y);*/
    return `Atstumas tarp taškų: ${Math.hypot(this.x-point.x, this.y-point.y)}`;
  }
}

let point1 = new Point(10, 20);
let point2 = new Point(30, 40);
console.log(point1);
console.log(point2);
console.log(point1.coordinates());
console.log(point2.coordinates());
console.log(point1.distance(point2));

console.groupEnd();


//4) Sukurkite klasę vardu "Rectangle_3D" ir duokite jai "width", "height" ir "depth" parametrus.
//4.1) Sukurkite metodą "volume", kuris grąžina 3D stačiakampio tūrį.
//4.2) Sukurkite metodą "surfaceArea", kuris grąžina 3D stačiakampio paviršiaus plotą.
//4.3) Sukurkite metodą "perimeter", kuris grąžina 3D stačiakampio perimetrą.


console.groupCollapsed("4");
class Rectangle_3D {
  constructor(width, height, depth) {
    this.width = width;
    this.height = height;
    this.depth = depth;
  }

  volume() {
    let turis = this.width * this.height * this.depth;
    return turis;
  }

  surfaceArea() {
    let pavirsiausPlotas = 2 * ((this.width * this.height) + (this.width * this.depth) + (this.height * this.depth));
    return pavirsiausPlotas;
  }

  perimeter() {
    let perimetras = 4 * (this.width + this.height + this.depth);
    return perimetras;
  }
}

let rectangle_3D = new Rectangle_3D(2, 3, 5);
console.log(rectangle_3D);
console.log(rectangle_3D.volume());
console.log(rectangle_3D.surfaceArea());
console.log(rectangle_3D.perimeter());

console.groupEnd();

//+) Pabandyti sukurti User Interface 1 užduočiai ir spausdinti informaciją į ekraną. (Kas nori pasižiūrėkite JS Canvas ir su juo pabandykite atvaizduoti figūras puslapyje(bent jau 2D))

console.groupCollapsed("5");




console.groupEnd();












