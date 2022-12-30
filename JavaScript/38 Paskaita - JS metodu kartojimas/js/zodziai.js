/*// Nuskaititi duomenis is failo duomenys.txt
function readTextFile(file) {
    const rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                const allText = rawFile.responseText;
                console.log(allText);
            }
        }
    }
    rawFile.send(null);
}
readTextFile("duomenys.txt");
*/
const data = `Labas rytas lietuva! Keletas sakinių kurie yra labai svarbūs jums.
Labai svarbu, kad visi žmonės suprastų, kad tai yra labai svarbu.
Kokia šendien yra diena? Šiandien yra labai svarbi diena mums.
Tai jokių problemų šitoje vietoje aš nematau“, – komentavo jis žiniasklaidai.
Natūralu, čia toks, manyčiau, yra privalumas tokių dokumentų kaip „Lietuvos žemės kodas“.`

const eilutes = data.split('\n');
console.log(eilutes);

const zodziaiEilutese = [];
eilutes.forEach(eilute => {
    zodziaiEilutese.push(eilute.split(' '));
});
console.log(zodziaiEilutese);

const ilgiausiZodziai = [];
zodziaiEilutese.forEach(eilute => {
    eilute.forEach(zodis, i) => {
        console.log(ilgiausiZodziai[i]);
        
