// Gauname mūsų elementus HTML dokumente
const meals = document.querySelector('#meals');
const form = document.querySelector('form');
const ingredient = document.querySelector('#ingredient');

// Pridedame "submit" event listener form elementui
form.addEventListener('submit', (e) => {
  // Nutraukiame formos submit'inimą
  e.preventDefault();
  // Sukuriam URL, kuriame naudojame nurodytą ingredientą kaip filtrą
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient.value}`;
  // Siunčiame fetch užklausą su sukurtu URL
  fetch(url)
    .then((response) => response.json()) // Gauname atsakymą ir konvertuojame jį į JSON formatą
    .then((data) => {
      console.log(data);
      // Išvalome meals elemento HTML
      meals.innerHTML = '';
      // Ciklu perduodame per visus gautus patiekalus
      data.meals.forEach((meal) => {
        // Sukuriame naują HTML elementą
        const mealDiv = document.createElement('div');
        // Pridedame "meal" klasę prie naujo elemento
        mealDiv.classList.add('meal');
        // Pridedame naujam elementui HTML kodą su duomenimis apie patiekalą
        mealDiv.innerHTML = `
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <h3>${meal.strMeal}</h3>
        `;
        // Pridedame naują elementą prie meals elemento
        meals.append(mealDiv);
        // Pridedame event listener naujam elementui, kuris bus sukviestas spustelėjus ant patiekalo
        mealDiv.addEventListener('click', () => {
          // Sukuriame naują URL su patiekalo ID kaip filtru
          const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`;
          // Siunčiame fetch užklausą su sukurtu URL
          fetch(url)
            .then((response) => response.json()) // Gauname atsakymą ir konvertuojame jį į JSON formatą
            .then((data) => {
              console.log(data);
              // Gauname patiekalo informaciją iš gauto duomenų
              const meal = data.meals[0];
              // Sukuriame masyvą su patiekalo ingredientais
              const ingredients = [];
              // Ciklu per visus iki 20 patiekalo ingredientus
              for (let i = 1; i <= 20; i++) {
                // Jeigu yra nurodytas ingredientas, jį pridedame prie masyvo
                if (meal[`strIngredient${i}`]) {
                  ingredients.push(
                    `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
                  );
                }
              }
              // Sukuriame naują HTML elementą
              const mealDiv = document.createElement('div');
              // Pridedame "mealInfo" klasę prie naujo elemento
              mealDiv.classList.add('mealInfo');
              // Pridedame naujam elementui HTML kodą su duomenimis apie patiekalą
              mealDiv.innerHTML = `
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
              <h3>${meal.strMeal}</h3>
              <h4>Ingredients</h4>
              <ul>
                ${ingredients
                  .map((ingredient) => `<li>${ingredient}</li>`)
                  .join('')}
              </ul>
              <h4>Instructions</h4>
              <p>${meal.strInstructions}</p>
              <h4>Video Recipe</h4>
              <iframe src="https://www.youtube.com/embed/${meal.strYoutube.slice(
                -11
              )}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              `;
              // Išvalome meals elemento HTML
              meals.innerHTML = '';
              // Pridedame naują elementą prie meals elemento
              meals.append(mealDiv);
            });
        });
      });
    });
});



