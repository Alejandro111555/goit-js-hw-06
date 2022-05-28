const allCategoriesRef = document.querySelectorAll(`ul#categories li.item`);
const numberOfCategories = allCategoriesRef.length;
console.log(`Number of categories: ${numberOfCategories}`);

allCategoriesRef.forEach((element) => {
  const titleText = element.firstElementChild.textContent;
  console.log(`Category: ${titleText}`);
  const elementsRef = element.lastElementChild.children.length;
  console.log(`Elements: ${elementsRef}`);
});