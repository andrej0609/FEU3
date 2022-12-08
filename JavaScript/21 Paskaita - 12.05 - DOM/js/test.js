//task1

let task1 = document.querySelector('#task1');

for (let i = 0; i < 1; i++) {
  task1.innerHTML += `
    <div>
      <h1 class = "title">${data[0].title}</h1>
      <p class = "par1">${data[0].paragraph}</p>
      <img class = "monaLisa" src="${data[0].image}" />
    </div>
  `;
}

//task2

task2.innerHTML += `
  <div>
    <h1 class = "title">${data[1].title}</h1>
  </div>
  `;
for (let i = 0; i < data[1].images.length; i++) {
  task2.innerHTML += `
    <div class = "imageChange">
      <img class = "image" src="${data[1].images[i]}" />
    </div>
  `;
}


//task3


task3.innerHTML += `
    <div>
    <h1 class = "title">${data[2].title}</h1>
    </div>
  `;

for (let i = 0; i < data[2].paragraphs.length; i++) {
  task3.innerHTML += `
    <div>
      <h2 class = "namesOfWorks">${data[2].imagesTitles[i]}</h2>
    </div>
    <div>
      <p class = "par1">${data[2].paragraphs[i]}</p>
    </div>
    <div>
      <img class = "images" src="${data[2].images[i]}" />
    </div>
  `;
}


// task4
// x%5 - x%3 - fizzBuzz; x%3 - Fizz; x%5 - Buzz; x - x
function fizzBuzz(nuo, iki){
  for(let i =nuo; i <iki; i++){
    if(i % 5 === 0 && i % 3 === 0){
      console.log("FizzBuzz");
    }else if(i % 3 === 0){
      console.log("Fizz");
    }else if(i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// Prime
console.groupCollapsed('extra2')

let n = 100;
nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime;
  }

  console.log(i)
}
console.groupEnd();
