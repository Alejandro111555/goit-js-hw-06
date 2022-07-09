// В HTML есть пустой список ul#ingredients.
// В JavaScript есть массив строк - ingredients
// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listOfIngredients = ingredients.map((element) => {
  const listItemEl = document.createElement("li");
  listItemEl.textContent = element;
  listItemEl.classList.add("item");
  return listItemEl;
});
const unorderedList = document.querySelector("#ingredients");
unorderedList.append(...listOfIngredients);
