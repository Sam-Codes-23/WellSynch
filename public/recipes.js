// JavaScript source code
const recipes = [
    {
        name: "Quinoa Salad",
        url: "https://cookieandkate.com/best-quinoa-salad-recipe/",
        description: "A healthy salad made with quinoa, avocado, and cherry tomatoes"
    },
    {
        name: "Veggie Stir-Fry",
        url: "https://therecipecritic.com/vegetable-stir-fry/",
        description: "A tasty stir-fry with broccoli, carrots, and peppers"
    },
    {
        name: "Chickpea Curry",
        url: "https://hostthetoast.com/easy-chickpea-curry/",
        description: "A flavorful curry made with chickpeas, spinach, and coconut milk"
    }
];

const recipeList = document.getElementById("recipe-list");

for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    const listItem = document.createElement("li");
    listItem.classList.add("recipe");
    listItem.innerHTML = `
    <h2><a href="${recipe.url}" target="_blank" rel="noopener noreferrer">${recipe.name}</a></h2>
    <p>${recipe.description}</p>
  `;
    recipeList.appendChild(listItem);
}

