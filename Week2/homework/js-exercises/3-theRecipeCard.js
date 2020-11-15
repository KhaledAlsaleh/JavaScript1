//In this way we get the same result in question without loop!

/*

'use strict'

const recipe = {};
recipe.title = 'Omelette';
recipe.servings = 2;
recipe.ingredients = ['4 eggs', '2 strips of bacon', '1 tsp salt/pepper']


console.log("Meal Name: " + recipe.title);
console.log("Serve: " + recipe.servings);
const ingredientString = recipe.ingredients.join(", "); 
console.log('Ingredients :', ingredientString); 

*/



// there is another way to do that using loops only for ingredients property:

/*

'use strict'

const recipe = {};
recipe.title = 'Omelette';
recipe.servings = 2;
recipe.ingredients = ['4 eggs', '2 strips of bacon', '1 tsp salt/pepper']

console.log("Meal Name: " + recipe.title);
console.log("Serve: " + recipe.servings);
console.log("Ingredients: ");
for (var i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);  
} 

*/



// Or we can creat array of objects as we discussed in the question-and-answer session with Inou



const pizzaRecipe = {};
pizzaRecipe.title = 'Pizza';
pizzaRecipe.servings = 1;
pizzaRecipe.ingredients = ['Flower', 'Tomato Sauce', 'Mushroom', 'Mozzarella'];

const falafelRecipe = {};
falafelRecipe.title = 'Falafel';
falafelRecipe.servings = 8;
falafelRecipe.ingredients = ['Chickpeas', 'Tahine', 'Spices'];

const recipes = [
   pizzaRecipe,
   falafelRecipe
 ];

recipes.forEach(recipe => {
   console.log('Meal Name :',recipe.title);
   console.log('Servings :', recipe.servings);
   const ingredientString = recipe.ingredients.join(", ");
   console.log('Ingredients :', ingredientString);
 }) 
 
 