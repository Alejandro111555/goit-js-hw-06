// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body =document.body;
const btnRef = document.querySelector('.change-color');
const descrRef = document.querySelector(".color");

btnRef.addEventListener('click', changeColor);
function changeColor () {
const color =  getRandomHexColor();
body.style.backgroundColor = color;
descrRef.textContent = color;

}