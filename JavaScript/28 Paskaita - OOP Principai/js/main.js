
//        OOP Principai
/*
  1. Encapsulation (Inkapsuliacija) - objekto vidiniai duomenys yra slepiami ir jais galima manipulioti tik naudojant objekto viešus metodus.
  2. Abstraction (Abstrakcija) - objekto nepriklausomumas nuo išorinių sudedamųjų dalių.
  3. Inheritance (Paveldėjimas) - viena klasė gali būti kitos klaės pagrindas.
  4. Polymorphism - galimybė dirbti su objektu nežinant jo tiklaus tipo ir struktūros.

*/

class Gyvunas {
  #pavadinimas;
  #kojuKiekis;
  constructor(pavadinimas, kojuKiekis) {
    this.#pavadinimas = pavadinimas;
    this.#kojuKiekis = kojuKiekis;
  }

  getPavadinimas() {
    return this.#pavadinimas;
  }

  setPavadinimas(naujasPavadinimas) {
    this.#pavadinimas = naujasPavadinimas;
  }

  getKojuKiekis() {
    return this.#kojuKiekis;
  }

  setKojuKiekis(naujasKojuKiekis) {
    this.#kojuKiekis = naujasKojuKiekis;
  }
  valgo() {
    return "Valgo kažką...";
  }
}

class Katinas extends Gyvunas {
  constructor(kojuKiekis) {
    super("Katinas", kojuKiekis);
  }
  #balsoVariantai = ["Miau", "Murrr", "Miau Miau"];
  #balsoVariantas() {
    return this.#balsoVariantai[Math.floor(Math.random() * this.#balsoVariantai.length)];
  }


  balsas() {
    return this.#balsoVariantas();
  }

  valgo() {
    return "Valgo kačių maistą";
  }
}



class Voras extends Gyvunas {
  constructor(kojuKiekis) {
    super("Voras", kojuKiekis);
  }

  gasdina() {
    return "Buuuuu Ha Ha";
  }

  valgo() {
    return "Valgo žvėris";
  }
}


let gyvunas = [
  new Gyvunas("Šuo", 4),
  new Katinas(4),
  new Voras(8)
];


// Susikurti (h1-h6) Antraštės Klasę su tekstu, atributais
class Heading {
  constructor(props) {
    this.props = props;
    return this.render();
  }

  render = () => {
    this.htmlElement = document.createElement(`h${this.props.dydis}`);
    this.textElement = document.createTextNode(this.props.tekstas);
    this.htmlElement.append(this.textElement);

    if (this.props.atributai) {
      // jeigu atributai yra objektas
      Object.keys(this.props.atributai).forEach(raktas => {
        this.htmlElement.setAttribute(raktas, this.props.atributai[raktas]);
      });

      // jeigu atributai yra masyvai masyve
      // this.props.atributai.forEach(atributas => {
      //   this.htmlElement.setAttribute(atributas[0], atributas[1]);
      // });
    }

    return this.htmlElement;
  }
}

let antraste1 = new Heading({
  dydis: '1',
  tekstas: 'Kaimietiškai',
  atributai: {
    class: 'klasesVardas darVienaKlase',
    id: 'kazkoksId',
    style: 'color:red'
  }
  // atributai: [ 
  //   ['class', 'klasesVardas darVienaKlase'],
  //   ['id', 'kazkoksId'],
  //   ['style', 'color:red']
  // ]
});
document.querySelector("body").append(antraste1);
document.querySelector("body").append(new Heading({
  dydis: '5',
  tekstas: 'Labas rytas',
  // atributai: [
  //   ['style', 'font-size: 50px']
  // ]
  atributai: {
    style: 'font-size:50px'
  }
}));
document.querySelector("body").append(new Heading({
  dydis: '6',
  tekstas: 'mažiukas'
}));

//5) Sukurti Klasę, kuri kurs paragrafus.
class Paragraph {
  constructor(props) {
    this.props = props;
    return this.render();
  }

  render = () => {
    this.htmlElement = document.createElement('p');
    this.textElement = document.createTextNode(this.props.tekstas);
    this.htmlElement.append(this.textElement);

    if (this.props.atributai) {
      Object.keys(this.props.atributai).forEach(raktas => {
        this.htmlElement.setAttribute(raktas, this.props.atributai[raktas]);
      });
    }

    return this.htmlElement;
  }
}

let paragrafas1 = new Paragraph({
  tekstas:
    "Lorem ipsum dolor sit ame  consectetur adipisicing elit. Quisquam, quod.",
  atributai: {
    class: "klasesVardas darVienaKlase",
    id: "kazkoksId",
    style: "color:green"
  }
});
document.querySelector("body").append(paragrafas1);
document.querySelector("body").append(
  new Paragraph({
    tekstas: "Laba diena",
    atributai: {
      style: "font-size:20px"
    }
  })
);
document.querySelector("body").append(
  new Paragraph({
    tekstas: "Paragrafas"
  })
);

//5) Sukurti Klasę, kuri kurs input.
class Input {
  constructor(props) {
    this.props = props;
    return this.render();
  }

  render = () => {
    this.htmlElement = document.createElement('input');
    this.textElement = document.createTextNode(this.props.tekstas);
    this.htmlElement.append(this.textElement);

    if (this.props.atributai) {
      Object.keys(this.props.atributai).forEach(raktas => {
        this.htmlElement.setAttribute(raktas, this.props.atributai[raktas]);
      });
    }

    return this.htmlElement;
  }
}

let inputas1 = new Input({
  atributai: {
    class: "klasesVardas darVienaKlase",
    id: "kazkoksId",
    style: "color:green"
  }
});
document.querySelector("body").append(inputas1);
document.querySelector("body").append(
  new Input({
    atributai: {
      style: "font-size:20px"
    }
  })
);
document.querySelector("body").append(
  new Input({
  })
);

//6) Sukurti Klasę, kuri kurs mygtukus.
class Button {
  constructor(props) {
    this.props = props;
    return this.render();
  }

  render = () => {
    this.htmlElement = document.createElement('button');
    this.textElement = document.createTextNode(this.props.tekstas);
    this.htmlElement.append(this.textElement);

    if (this.props.atributai) {
      Object.keys(this.props.atributai).forEach(raktas => {
        this.htmlElement.setAttribute(raktas, this.props.atributai[raktas]);
      });
    }

    return this.htmlElement;
  }
}

let mygtukas1 = new Button({
  tekstas:
    "Labai ilgas mygtuko tekstas",
  atributai: {
    class: "klasesVardas darVienaKlase",
    id: "kazkoksId",
    style: "color:orange"
  }
});
document.querySelector("body").append(mygtukas1);
document.querySelector("body").append(
  new Button({
    tekstas: "Push",
    atributai: {
      style: "font-size:20px"
    }
  })
);
document.querySelector("body").append(
  new Button({
    tekstas: "button"
  })
);


