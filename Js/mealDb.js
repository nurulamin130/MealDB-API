const searchFood = () =>
{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${ name }`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchFood(data.meals))
}

const displaySearchFood = (meals) =>
{
    // console.log(meals)
    const searchResult = document.getElementById('search-result');
    meals.forEach(meal =>
    {
        
        // console.log(meal)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onClick="loadmealDetails(${meal.idMeal})" class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 83) }</p>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    });


}


const loadmealDetails = (mealId) =>
{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals))
}

const displayMealDetails = (meal) =>
{

    console.log(meal);
    const mealDetails = document.getElementById('meal-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
      <img src="${ meal.strMealThumb }" class="card-img-top" alt="...">
        <div class="card-body">
             <h5 class="card-title">${ meal.strMeal }</h5>
                   <p class="card-text">${meal.strInstructions.slice(0, 50) }</p> 
            <a href="${meal.strYoutube}" class="btn btn-primary">Go Youtube</a>
        </div>

    `;
    mealDetails.appendChild(div)
}