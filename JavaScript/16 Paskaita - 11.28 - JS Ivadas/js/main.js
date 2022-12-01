/*console.log("Labas Rytas Js'e");*/

//   Kintamieji
/*
  string        - Žodinis kintamasis rašomas kabutese '' / "" / ``
  number        - Skaitinis kintamasis
  boolean/bool  - Loginis kintamasis (True/False)



  null          - Tuščias
  undefinder    - Neapibrežtas
  NaN           - Not a Number


  array         - Masyvas
  object        - Objektas
  -----------------------------------------------------------------------------

  var/let/conts - Kintamuju ribu nurodymai 
  nameOrSmth    - Kintamojo vardas
  value         - Kintamojo reikšme

*/


let Vardas0 = "Andrejus";
let Vardas1 = 'Marius';
let Vardas3 = `Povilas`;
let Vardas4 = `Olga`;
let Vardas5 = `Jelena`;

let number1 = 27;
let number2 = 18;
let number3 = 25;
let number4 = 30;
let number5 = 35;

let bol1 = 0;
let bol2 = 1;

let ArTuriAugintiniu = true;
let ArNeTuriAugintiniu = false;
//---------------------------------------------------------------------------

//        Operatoriai  
/*
            Arithmetic
  +  - sudetis
  -  - atimimas
  *  - daugyba
  /  - dalyba
  ** - kelimas laipsniu  (šaknies radymas)
  %  - liekanos radymas

            Assigment
  =  - Lygybe

            Shortcuts
  ++  - didejimas vienetu ( kažkas = kažkas + 1)
  --  - mažejimas vienetu ( kažkas = kažkas - 1)
  +=  - pridejimas (kažkas = kažkas + kažkiek)
  -=  - atemimas (kažkas = kažkas - kažkiek)
  *=  - daugyba (kažkas = kažkas * kažkiek)
  /=  - dalinimas (kažkas = kažkas / kažkiek)
  %=  - liekanos (kažkas = kažkas % kažkiek)
  **= - laipsnio kelimas / šaknies traukimas (kažkas = kažkas ** kažkiek)

            Comparsion
  ==  - ar lygu duomenys
  === - ar lygu duomenys ir timas
  >   - daugiau negu
  <   - mažiau negu
  >=  - daugiau ar lygu
  <=  - mažiau ar lygu

            Logical
  !   - ne (apverčia reikšme) (NOT)
  &&  - ir                    (AND)
  ||  - arba                  (OR)

            Type
  typeof  - tikrina tipa 
*/
//        TASK2
{
  console.log('number1+number3', number1 + number2);
  console.log('number1-number3', number1 - number2);
  console.log('number1*number3', number1 * number2);
  console.log('number1/number3', number1 / number2);
  console.log('number1**number3', number1 ** number2);
  console.log('number1%number3', number1 % number2);
  console.log('number1++', ++number1);
  console.log('number1--', --number1);

  console.log('Vardas0+Vardas1', Vardas0 + Vardas1);
  console.log('Vardas2-Vardas1', Vardas0 - Vardas1);
  console.log('Vardas1*Vardas2', Vardas0 * Vardas1);
  console.log('Vardas0/Vardas1', Vardas0 / Vardas1);
  console.log('Vardas0**Vardas1', Vardas0 ** Vardas1);
  console.log('Vardas0%Vardas1', Vardas0 % Vardas1);
  console.log('Vardas0++', ++Vardas1);
  console.log('Vardas0--', --Vardas1);


  console.log('bol1+bol2', bol1 + bol2);
  console.log('bol1-bol2', bol1 - bol2);
  console.log('bol1*bol2', bol1 * bol2);
  console.log('bol1/bol2', bol1 / bol2);
  console.log('bol1**bol2', bol1 ** bol2);
  console.log('bol1%bol2', bol1 % bol2);  //tik šitas negalimas (1 % 0)
  console.log('bol1++', ++bol1);
  console.log('bol2--', --bol1);


  console.log('number1+vardas1', number1 + Vardas1); // tik sitas galimas
  console.log('number1-vardas1', number1 - Vardas1);
  console.log('number1*vardas1', number1 * Vardas1);
  console.log('number1/vardas1', number1 / Vardas1);
  console.log('number1**vardas1', number1 ** Vardas1);
  console.log('number1%vardas1', number1 % Vardas1);
  console.log('number1++', ++number1);
  console.log('number1--', --number1);


  console.log(number3 + bol1)


}
//        TASK3
{
  console.log('number1++', ++number1);
  console.log('number--', --number1);
  console.log('number1+=number3', number1 += number3);
  console.log('number1-=number3', number1 -= number3);
  console.log('number1*=number3', number1 *= number3);
  console.log('number1/=number3', number1 /= number3);
  console.log('number1%=number3', number1 %= number3);
  console.log('number1**=number3', number1 **= number3);
}

//        TASK4
{

  console.log('number2==number3', number2 == number3);
  console.log('number4===number3', number4 === number3);
  console.log('number1>number3', number1 > number3);
  console.log('number1<number3', number1 < number3);
  console.log('number1>=number3', number1 >= number3);
  console.log('number1<=number3', number1 <= number3);
}

//            Salygos
/*            If Else
  if  - pradine sakyga
  else if - papildoma salyga, kuri tikrinama tik jeigu aukščiau esanti/čios salyga/os gražino false.
  else if ...
  esle - vykdomos jeigu visos aukščiau esančios salygos gražino false.
              Nesting
*/

//        TASK5 - 6 - 7

let amzius = 15
if(amzius >= 18){
  console.log('Esi pilnametis.');
  if(amzius > 90 && amzius < 130){
    console.log('Esi pensininkas.');
  } else if(amzius < 90){
    console.log('Esi darbingo amziaus pilnametis.');
  } else {
    console.log('Kaip tu dar gyvas?');
  }
} else if(amzius < 7) {
  console.log('Esi iki mokyklinio amziaus.');
} else {
  console.log('Esi mokyklinukas.');
} 

  
{
let arTuriVairuotojoTeises = true;
let arTuriAutomobili = true;
let arEsiBlaivas = false;
if(arTuriVairuotojoTeises === true){
  console.log("Vairuotojo teises turi.");
  if(arTuriAutomobili === true && arEsiBlaivas === true){
    console.log("Gali sest ir vairuoti.");
  } else if(arTuriAutomobili === false){
    console.log("Neturi auto - neturi kuo vairuoti.");
  } else {
    console.log("Nesi blaivas, nera kuo vairuot.");
  }
} else {
    console.log("Vairuotojo teisiu neturi.");
  }
}

//            AND ir OR
/*
  Naudojant && tikrinama ar abejose pusese yra tiesa. Jeigu bent vienoje puseje yra melas - gražina mela. Jeigu kaireje puseje yra melas - dešines puses net netikrina/nevykdo.
  Naudojant || tikrinama ar bent vienoje puseje yra tiesa. Jeigu bent vienoje puseje yra tiesa - gražina tiesa. Jeigu kaireje puseje yra tiesa - dešines puses net netikrina/nevykdo.
*/
if(5 == '5' && typeof('5') == typeof(5)){
    console.log('lygu');
} else {
   console.log('nelygu');
}
if(true || false){
  console.log('tiesa');
} else {
  console.log('melas');
}


//              Truthy ir Falsy
/*
  truthy -  true  | not 0 number  | 'string'          | array/masyvas | objektas  | funkcija 
  falsy  -  false | 0             | '' (empty string) | undifinded    | null      | NaN

*/
if("haha"){
  console.log("truthy");
} else {
  console.log("falsy");
}

//          Switch 
/*


*/
const randomNumber2 = Math.floor(Math.random() * 100);
console.log(randomNumber2);

switch(randomNumber2) {
  case randomNumber2 < 20 && randomNumber2:
    console.log('randomNumber maziau 20');
    break;
  case randomNumber2 > 50 && randomNumber2:
    console.log('randomNumber daugiau 50');                      
    break;
  default :
    console.log('randomNumber maziau 20, ir daugiau 50');
 }


let megstamiausiaSpalva = 'geltona';
switch(megstamiausiaSpalva){
  case 'geltona':
  case 'rauduona':
    console.log("Tu megsti ryskia spalva.");
    break;
  case 'melyna':
  case 'ruda':
    console.log("Tu megsti tamsias spalvas.");
    break;
}
/*
window.alert("Laba diena");
let miestas = prompt("Iš kurio miesto esate?");
switch(miestas){
  case "Kaunas":
    console.log("Kaunas yra Lietuvos marazu miestas");
    break;
  case "Vilnius":
    console.log("Vilnius yra lietuvos sostine");
    break;
  case "Klaipeda":
    console.log("Klaipeda vienintele turi juros uosta.");
    break;
  default:
      console.log("Tokio miesto nera");
}
*/
window.alert("Laba diena");


let miestas = prompt("Iš kurio miesto esate?");
if( miestas == 'Vilnius' ) 
window.alert('Vilniu  - yra didžiausias Lietuvos miestas');
if( miestas == 'Kaunas' ) 
window.alert('Kaunas - yra Europos kulturos sostine');
if( miestas == 'Utena' ) 
window.alert('Utena - yra kažkur toli');
if( miestas == 'Panevežys' ) 
window.alert('Panevėžys – didžiausias Aukštaitijos pramonės centras, turintis įtakos viso regiono plėtrai.');
else {
  window.alert('Tokio miesto nerasta');
}


let menuo = prompt("Koks dabar menuo?");
switch(menuo){
  case "Gruodis":
  case "Sausis":
  case "Vasaris":
    console.log("Dabar yra žiema");
    break;
  case "Kovas":
  case "Balandis":
  case "Geguže":
    console.log("Dabar yra pavasaris");
    break;
  case "Birželis":
  case "Liepa":
  case "Rugpjutis":
    console.log("Dabar yra vasara");
    break;
  case "Rugsejis":
  case "Spalis":
  case "Lapkritis":
    console.log("Dabar yra rusuo");
    break;
  default:
    console.log("Neteisingai ivestas menuo");
}