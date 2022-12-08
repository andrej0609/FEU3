let milkPrice = 3.452;

milkPrice % 1 !== 0
  ? console.log("Reikia centu", milkPrice.toFixed(2))
  : console.log("Centu nereikia:", milkPrice);


//1.3

function kuroKainos() {
  let fuel = document.getElementById('fuel').value;
  let costper = document.getElementById('costper').value;
  let consumed = (fuel * costper).toFixed(2);
  let costper100 = (consumed * costper).toFixed(2);
  document.getElementById('consumption').innerHTML = "Kuro kaina = € " + (fuel * costper).toFixed(2);
}


// Task 2
// 2.1
/*{
document.querySelector('#task2').addEventListener('submit', (e) => {
  e.preventDefault();
    let name = document.getElementById("name").value;
    let number = Number(document.getElementById("number").value);
    if (Number.isInteger(number)) {
      let h1 = document.createElement("h1");
      h1.textContent = name.repeat(number);
      document.querySelector("#task2").append(h1);
    } else {
      console.log("Ivestas skaicius yra ne sveikas skaitmuo");
    }
  })
}*/

//      string task 4
function fullNameSplit(fullName){
  console.log(fullName.indexOf(' '));
  let firstSpace = fullName.indexOf(' ');
  let name1 = fullName.slice(0, firstSpace);
  let name2 = fullName.slice(firstSpace+1);
  console.log(name1+'-----'+name2);
}

fullNameSplit("Rokas Banaitis trečiasis");