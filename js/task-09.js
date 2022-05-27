function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body =document.body;
console.log(body);
const btnRef = document.querySelector('.change-color');

btnRef.addEventListener('click', changeColor);
function changeColor () {
const color =  getRandomHexColor();
body.style.backgroundColor = color;
}