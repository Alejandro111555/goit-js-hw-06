const body = document.body;
const untitledList = body.childNodes[3];
const listItem = untitledList.children;
console.log('Number of categories:' ,listItem.length);
const itemCategories = [...listItem];

console.log('Category:',itemCategories[0].childNodes[1].firstChild);
console.log("Elements:",itemCategories[0].childNodes[3].children.length);
console.log('Category:',itemCategories[1].childNodes[1].firstChild);
console.log("Elements:",itemCategories[1].childNodes[3].children.length);
console.log('Category:',itemCategories[2].childNodes[1].firstChild);
console.log("Elements:",itemCategories[2].childNodes[3].children.length);