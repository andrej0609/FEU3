//          Ciklai
/*
    do while        - Bent viena syki butu paleistas ciklas.
    for in         - suka cikla per objekta.
    for of          - suka ciklas per masyva.
   

    array iteration methods
*/
// do while 
let i = 1;
/*
while(i>10){
  console.log('veiksmai');
  i++;
}
*/

do {
  console.log('veiksmai');
  i++;
} while(i>10);

// for in
{
  console.groupCollapsed("forIn");
  let objektas = {a:1, b:2, c:3, d:4, e:5};
  for (let key in objektas) {
    console.log(key, ":", objektas[key]);
}
  console.groupEnd();
}

// for of
  console.groupCollapsed("forOf");
{
  let masyvas = [5,8,9,4,1, false, false, true, 'hallo', 46, 1, 5, 4];
  for(let element of masyvas){
    typeof(element) === "number" ? console.log(element) : null;
}
console.groupEnd();
}

// forEach
  console.groupCollapsed("forEach");
{
  let masyvas = [5,8,9,4,1, false, false, true, 'hallo', 46, 1, 5, 4];
  masyvas.forEach(element => typeof(element) === "number" ? console.log(element) : null);
}
  console.groupEnd(); 


  //              Funkcijos
  /*
    Funkcija - veiksmu seke, kuri yra vykdoma tik tuomet, kai i ta funkcija yra kreipiamasi.
    Parametrai/Argumentai - duomenys, perduodami funkcijai jos iskvietimo metu, su kuriais funkcijos viduje bus atliekami kazkokie vaiksmai.
    Return - funkcija gali kazka grazinti. Funkcijos veiksmai vyksta iki tol kol pasiekiamas return'as.
   */
  function hello(vardas) {
    console.log("Hello" + vardas);
  }

  function sudetis(nr1, nr2) {
    console.log("why not");
    if(typeof(nr1) === "number" && typeof(nr2) === "number"){
       let atsakymas = nr1 + nr2;
       return atsakymas;
    } else {
      return "Error 404";
    }
    console.log("not happened");
  
  }


  function kiekStringuMasyve(array){
    let kiek = 0;
    for(let i = 0; i < array.legnth; i++) {
      if(typeof(array[i]) === "string"){
        kiek++;
      }
  }
  return kiek;

  }

//          Masyvu metodai
/*
  pop()        - isima is masyvo galo, modifikuoja.
  shift()      - isima is masyvo pradzios, modifikuoja.
  push()       - prideda prie masyvo galo, modifikuoja.
  unshift()    - prideda prie masyvo pradzios, modifikuoja.

  reverse()    - apsuka masyva, modifikuoja masyva.
  slices(nr1,nr2)  - paima nuo nr1 (imtinai) iki nr2 (neimtinai) masyvo elementus, Nemodifikuoja masyvo.
  splice(nr1(nuo kokio skaiciaus), nr2(kiek skaiciu), nr3, nr4, nr5 ...) - nuo nr1 trina nr2 kieki elementu ir nr1 vietoje prideda nr3, nr4, nr5.. elementus, modifikuoja.
  arr1.concat(arr2, arr3, arr4...) - prie array1 masyvo prijungia arr2, arr3, arr4... masyvus, NEmodifikuoja.
  sort()  - isrikioja masyva abeceles tvarka.
  skaiciu problema sprendziama su function(a,b){return a-b} ikelta is sort skliaustelius.
  zodziu problema sprendziama su .sort(function(a,b){return a.localeCompare(b)})
*/
let masyvas = [1,2,3,4,5,6,7,8,9];
let gabaliukas = masyvas.slice(3, 6);
let iskirptas = masyvas[3];
masyvas.splice(3, 2, 9, 8, 7);
let sujungtas  = masyvas.concat(['labas', 'Ąs', 'esu', 'naujas', 'masyvas'], [false, 0, "undefinded", "null", 90, 1150, 645]);
sujungtas.sort(function(a,b){return a-b});
// sujungtas.sort(function(a,b){return a.localeCompare(b)}); - tik zodziu masyvui.