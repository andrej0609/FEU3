//        Async 

/* 
  1) async ir await
  2) try ir catch ir finally
  3) Promise (resolve, reject)
  4) then catch finally
*/

// Async Function
/*
  Rašant kodą sinchroniškai kartais reikia laukti, kol bus atlikta tam tikra operacija, pvz. duomenų užklausa į serverį.
  Tam, kad sulauktume atsakymo, reikia uždelsoti programos vykdymą. Tai galima padaryti naudojant setTimeout() funkciją.
  Persistenget su setTimeout'ais ar kitais callback'ais. Sukuriame vadinamaji "callback hell". Ko pasekoje nukenčia kodo skaitomumas.
  Tam, kad galetume rašyti kodą asinchroniškai ir išvengti callback hell, prieš funkią pridedame "async" raktažodį, šitaip paverdami funkciją į asinchroninę.

  Noredami nuroditi, kad reikia laukti, kol bus atlikta tam tikra operacija, naudojame "await" raktažodį.
  "await" raktažodis gali būti naudojamas tik asinchroninėse funkcijose.

*/
/*
  syntax:
  async function name() {
    await someOtherF();
    await someMethod();
  }
  let name = async () => {
    await someOtherF();
    await someMethod();
  }
*/

function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}


async function f1(number) {
  try {
    const x = await resolveAfter2Seconds(number * 5);
    console.log(x);
  } catch (error) {
    console.log(error);
  } finally {
    console.log('Baigesi kodas');
  }
  console.log('Baigesi');
}

f1(5);

// try... catch... finally...
/* syntax:
  try {code} catch (error) {code} finally {code}
  try bando vykdyti kodą;
  Jeigu try bloke įvyksta klaida, tai vykdomas catch blokas; Galiausiai vykdomas finally blokas.

  Net jeigu try viduje gausime klaidą, tai catch blokas vis tiek bus vykdomas.
*/



