const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsUl = document.body.children[1];

const pack =[];
const addElementsToingredientsUl  = function (ingredients) {
  for(let ingredient of ingredients) {
    let listItem = document.createElement('li');
    listItem.classList.add('item');
    listItem.textContent = ingredient;
    pack.push(listItem); 
   
  }
  return pack;
}
addElementsToingredientsUl(ingredients);
ingredientsUl.append(...pack);
