// Gauname mūsų elementus HTML dokumente
const meals = document.querySelector('#meals');
const form = document.querySelector('form');
const ingredient = document.querySelector('#ingredient');

// Pridedame event listener formai, kuris bus sukviestas spustelėjus ant formos
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Siunčiame fetch užklausą su sukurtu URL
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient.value}`)
    .then((response) => response.json()) // Gauname atsakymą ir konvertuojame jį į JSON formatą
    .then((data) => {
      console.log(data);
      // Išvalome meals elemento HTML
      meals.innerHTML = '';
      // Ciklu perduodame per visus patiekalus
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
          // Siunčiame fetch užklausą su sukurtu URL
          fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`)
            .then((response) => response.json()) // Gauname atsakymą ir konvertuojame jį į JSON formatą
            .then((data) => {
              console.log(data);
              // Gauname patiekalo informaciją iš gautu duomenų
              const meal = data.meals[0];
              // Sukuriame masyvą su patiekalo ingredientais
              const ingredients = [];
              // Ciklu perduodame per visus ingredientus
              for (let i = 1; i <= 20; i++) {
                // Tikriname ar ingredientas yra
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



