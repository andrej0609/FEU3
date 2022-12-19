import Heading, { helloWorld, NotMyComponent } from './heading.js';

//            KOMPONENTAI

//1)  UL/OL komponentas

class List {
  constructor(props) {
    this.props = props;
    return this.render();
  }

  render() {
    this.htmlElement = document.createElement(this.props.type);
    Object.keys(this.props.attributes).forEach(attributes => {
      this.htmlElement.setAttribute(attributes, this.props.attributes[attributes]);
    });

    this.props.listItems.forEach(listItem => {
      this.li = document.createElement('li');
      this.liTextNode = document.createTextNode(listItem.text);
      this.li.append(this.liTextNode);
      Object.keys(listItem.attributes).forEach(attributes => {
        this.li.setAttribute(attributes, listItem.attributes[attributes]);
      });
      this.htmlElement.append(this.li);
    });

    return this.htmlElement;
  }
}

let list = new List({
  type: 'ul',
  attributes: {
    class: 'list',
    id: 'list',
    style: 'color: purple'
  },
  listItems: [
    {
      text: 'Pirmas',
      attributes: {
        class: 'list-item',
        style: 'color: red',
      }
    }, {
      text: 'Antras',
      attributes: {
        class: 'list-item',
        style: 'color: green',
      }
    }, {
      text: 'Trecias',
      attributes: {
        class: 'list-item',
        style: 'color: blue',
      }
    }, {
      text: 'Ketvirtas',
      attributes: {
        class: 'list-item',
        style: 'color: purple',
      }
    }
  ]
});

document.querySelector('body').append(list);


//2 Sukurti klasę, kurios pagalba galima būtų kurti SELECT elementą, kurio viduje būtų OPTION elementai su value. su galimybe suteikti atributus ir tekstą.

class Select {
  constructor(props) {
    this.props = props;
    return this.render();
  }

  render() {
    this.htmlElement = document.createElement('select');
    Object.keys(this.props.attributes).forEach(attributes => {
      this.htmlElement.setAttribute(attributes, this.props.attributes[attributes]);
    });

    this.props.options.forEach(option => {
      this.option = document.createElement('option');
      this.optionTextNode = document.createTextNode(option.text);
      this.option.append(this.optionTextNode);
      Object.keys(option.attributes).forEach(attributes => {
        this.option.setAttribute(attributes, option.attributes[attributes]);
      });
      this.htmlElement.append(this.option);
    });

    return this.htmlElement;
  }
}

let select = new Select({
  attributes: {
    class: 'select',
    id: 'select',
    style: 'color: purple'
  },
  options: [
    {
      text: 'Pirmas',
      attributes: {
        class: 'option',
        style: 'color: red',
        value: '1'
      }
    }, {
      text: 'Antras',
      attributes: {
        class: 'option',
        style: 'color: green',
        value: '2'
      }
    }, {
      text: 'Trecias',
      attributes: {
        class: 'option',
        style: 'color: blue',
        value: '3'
      }
    }, {
      text: 'Ketvirtas',
      attributes: {
        class: 'option',
        style: 'color: purple',
        value: '4'
      }
    }
  ]
});

document.querySelector('body').append(select);


//3) Sukurti Klasę, kurios pagalba galima būtų kurti TABLE elementą, kurio viduje būtų THEAD ir TBODY. THEAD viduje būtų TR, kurio viduje TH. TBODY viduje būtų TR, kurių viduje būtų TD.  (kas be ko, galimybė suteikti tekstus ir atributus).

//Table
class Table {
  constructor(props) {
    this.props = props;
    return this.render();
  }

  render() {
    this.htmlElement = document.createElement(this.props.type);
    Object.keys(this.props.attributes).forEach(attributes => {
      this.htmlElement.setAttribute(attributes, this.props.attributes[attributes]);
    });

    //tHead
    this.thead = document.createElement('thead');
    this.tr = document.createElement('tr');
    Object.keys(this.props.thead).forEach(th => {
      this.th = document.createElement('th');
      this.thTextNode = document.createTextNode(this.props.thead[th]);
      this.th.append(this.thTextNode);
      this.tr.append(this.th);
    });
    this.thead.append(this.tr);
    this.htmlElement.append(this.thead);

    //tBody
    this.tbody = document.createElement('tbody');
    this.props.tbody.forEach(tr => {
      this.tr = document.createElement('tr');
      Object.keys(tr).forEach(td => {
        this.td = document.createElement('td');
        this.tdTextNode = document.createTextNode(tr[td]);
        this.td.append(this.tdTextNode);
        this.tr.append(this.td);
      });
      this.tbody.append(this.tr);
    });
    this.htmlElement.append(this.tbody);

    return this.htmlElement;
  }
}

//Lentelės duomenys

let table = new Table({
  type: 'table',
  attributes: {
    class: 'table',
    style: 'color:  hsl(' + 360 * Math.random() + ', 100%, 50%);'
  },
  thead: {
    vardas: 'Vardas',
    pavarde: 'Pavarde',
    amzius: 'Amžius',
    arMokosiJS: 'Ar mokosi JS?'
  },
  tbody: [
    {
      vardas: 'Jonas',
      pavarde: 'Jonaitis',
      amzius: '25',
      arMokosi: 'Taip'
    }, {
      vardas: 'Petras',
      pavarde: 'Petraitis',
      amzius: '19',
      arMokosi: 'Ne'
    }, {
      vardas: 'Antanas',
      pavarde: 'Antanaitis',
      amzius: '23',
      arMokosi: 'Taip'
    }, {
      vardas: 'Kazys',
      pavarde: 'Kazlauskas',
      amzius: '27',
      arMokosi: 'Ne'
    }
  ]
});

document.querySelector('body').append(table); //kreipiamasi į dokumentą


//              MODULIAI
/*
  Kitu JS failų importavimas ir naudojimas.
    import ka 'iš kur'; - faile kuriame norime naudoti importus (main.js)

    type = "module" - nusirodyti atribut1 "type" su nustatymu "module" JS failo prijungime HTML'e.

    export default something(){}; 'isKur' faile reikia nurodyti ką jis eksportuoja (export default ka;)


  Galima rašyti tiek exsport default, tiek export;
    exsport default bus numatytasis eksportas, kurį priims rašydamas - import ka 'from  'exsportFile.js';.

    Vardas, kurį nurodai neprivalo sutapti su exsport deqault failo vardu esančiu exsportFile.js faile. Visviena bus eksportuojamas vienas vienintelis elementas, kuris turi default prieraša.

    exsport - paprastas eksportas, kurį priims rašydamas - import { exsportedName, exsportedName2 } from 'exsportFile.js';. Priimsi būtent tuos elementus, kurių vardus parašei ir kurie yra paprasti exsportai. Priimti paprastus exsportus galima kokiais tik nori pavadinimais naudojant "as" prierašą: import {exsportedName as pirmas, exsportedName2 as antras} from 'exsportFile.js';.
*/

let antraste = new Heading({
  dydis: '1',
  tekstas: 'Kaimietiškai',
  atributai: {
    class: 'big',
    style: 'color:red'
  }
});
console.log(antraste);

helloWorld();

NotMyComponent();



//    Duomenų saugojimas vartotojo dalyje.
// cookie
document.cookie = `name=Jonas; expires=${new Date('2022, 12, 30')}`;

// session Storage

document.querySelector('body').addEventListener('click', () => {
  sessionStorage.setItem('name', 'Petras');
  sessionStorage.setItem('age', '25');
  sessionStorage.setItem('city', 'Vilnius');
});

// local Storage

document.querySelector('body').addEventListener('click', () => {
  localStorage.setItem('name', 'Antanas');
  localStorage.setItem('age', '30');
  localStorage.setItem('city', 'Kaunas');
  localStorage.setItem(' hobbies', ['sport, music, movies']);
  let data = {
    name: 'Kazys',
    age: '35',
    city: 'Klaipeda'
  }
  console.log(data);
  console.log(JSON.stringify(data));

  localStorage.setItem('data', JSON.stringify(data));


  //localStorage.clear(); // išvalo visus local storage duomenis
  //console.log(localStorage.key(0)); // išveda nurodyto indekso local storage duomenį
  //console.log(localStorage.getItem(localStorage.key(0))); // išveda nurodytą local storage duomenį

});

// JSON.stringify(object) - konvertuoja objektą į stringą
// JSON.parse(string) - konvertuoja stringą į objektą
