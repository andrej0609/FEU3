//     Užduotys be ir su iteraciniais metodais
let zodziuMasyvas = ["Labas", "rytas", "Lietuva", "tau", "ir", "galiausiai", "JavaScript"];
let skaiciuMasyvas = [1, -2, 35, 4, 51, 46, 7, 28, -9, 10];
let misrusMasyvas = ["grinch", 1, "Labas", true, "rytas", 35, "Lietuva", false, "tau", "ir", 46, 7, 28, -9, 10];

//1) Funkcija, kuri i konsole išspausdina pateikto masyvo duomenis atskirose eilutese.
console.groupCollapsed("1");
let spausdintiMasyva = (masyvas) => {
  for (let i = 0; i < masyvas.length; i++) {
    console.log(masyvas[i]);
  }
}
console.log(spausdintiMasyva(zodziuMasyvas));

//su iteraciniais metodais
let spausdintiMasyva1 = (masyvas) => masyvas.forEach(elementas => console.log(elementas));
console.log(spausdintiMasyva1(skaiciuMasyvas));

console.groupEnd();

//2) Funkcija, kuri gražintu masyva, kuriame yra tik skaičiai didesni už 10, iš jai pateikto masyvo.
console.groupCollapsed("2");

let uzd_2_be = (masyvas) => {
  let naujasMasyvas = [];
  for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i] > 10) {
      naujasMasyvas.push(masyvas[i]);
    }
  }
  return naujasMasyvas;
}
console.log(uzd_2_be(skaiciuMasyvas));

//su iteraciniais metodais
let uzd_2_su = (masyvas) => masyvas.filter(elementas => elementas > 10);
console.log(uzd_2_su(skaiciuMasyvas));

console.groupEnd();

//3) Funkcija, kuri patikrintu ar jai paduotame string masyve bent vienas elementas yra ilgesnis nei 5 raidžių žodis ir gražintu true/false.
console.groupCollapsed("3");

let uzd_3_be = (masyvas) => {
  for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i].length > 5) {
      return true;
    }
  }
  return false;
}
console.log(uzd_3_be(zodziuMasyvas));

//su iteraciniais metodais
let uzd_3_su = (masyvas) => masyvas.some(elementas => elementas.length > 50);
console.log(uzd_3_su(zodziuMasyvas));

console.groupEnd();

//4) Funkcija, kuri jai paduotame mišriame masyve, rastu ir gražintu pirmaji kintamaji, kuris yra skaičius.
console.groupCollapsed("4");

let uzd_4_be = (masyvas) => {
  for (let i = 0; i < masyvas.length; i++) {
    if (typeof masyvas[i] === "number") {
      return masyvas[i];
    }
  }
}
console.log(uzd_4_be(misrusMasyvas));

//su iteraciniais metodais
let uzd_4_su = (masyvas) => masyvas.find(elementas => typeof elementas === "number");
console.log(uzd_4_su(misrusMasyvas));

console.groupEnd();



