//          DOM    

let renkames1 = document.querySelectorAll('p');
console.dir(renkames1);
console.log(renkames1);

//dir ir log
//dir - gražina interaktyvu elemento savybiu saraša.
//log - gražina elementa.

//       Evants

for(let i = 0; i < renkames1.length; i++){
  renkames1[i].addEventListener('click', function(event){
    console.dir(event);
    console.log('paspaudei ant ' + i + "'ojo, paragrafo.");
  });
}

let renkames2 = document.querySelector('html');
renkames2.addEventListener('keyup', function(event){
  console.dir(event);
  console.log('paspaudei ' + event.code + ' mygtuka.');
});


let visiH1 = document.querySelectorAll('h1');
for(let i = 0; i < visiH1.length; i++) {
  console.dir(visiH1[i]);
  visiH1[i].textContent += " :)";
  visiH1[i].style.color = "red";
 
}
// Tasks
{
//Task1
console.groupCollapsed("Task1");

let select = document.getElementById("events");
console.dir(select);
console.log(select);

let select2 = document.getElementsByTagName("h1"); 
console.dir(select2);
console.log(select2);

let select3 = document.getElementsByName("animal");
console.dir(select3);
console.log(select3);

let select4 = document.querySelector("p");
console.dir(select4);
console.log(select4);

let select5 = document.getElementsByClassName("big");
console.dir(select5);
console.log(select5);

let select6 = document.querySelector("img");

console.dir(select6);
console.log(select6);

let select7 = document.querySelector("input");

console.dir(select7);
console.log(select7);

console.groupEnd();
//task2
console.groupCollapsed("Task2");

document.getElementById("events").addEventListener("click", function(displayDate){
console.dir(displayDate);
console.log(displayDate);
});

let img = document.querySelector('img');
img.addEventListener('mouseenter', function(){
  img.style.opacity = 0.5;
});
img.addEventListener('mouseleave', function(){
  img.style.opacity = 1;
});


let input = document.querySelector("input");
input.addEventListener('mouseover', function(event){
  console.dir(event);
  console.log('užvedei ant input.');
})

console.groupEnd();

}
//     DOM kurimas iš JS'o
let DOM_is_JS = document.querySelector('#DOM_is_JS');

DOM_is_JS.innerHTML += "<p> Labas ٩(｡•́‿•̀｡)۶ </p>";

let paragrafas = document.createElement('p');
let tekstas = document.createTextNode("(◕‿◕)");
paragrafas.append(tekstas);
DOM_is_JS.append(paragrafas);

console.log(paragrafas);


//     DOM  Stilizavimas iš JS'o
paragrafas.style.color = 'red';
//paragrafas.className = 'tekstas';  is css failo.
//paragrafas.setAttribute('class', 'tekstas');
paragrafas.classList.add('tekstas');
