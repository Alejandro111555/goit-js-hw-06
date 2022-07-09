// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

const incrButton =document.querySelector('button[data-action="increment"]');
const decrButton =document.querySelector('button[data-action="decrement"]');
const counter = document.getElementById('value');
console.log(counter.textContent);
let counterValue=0;

function increment() {
  counterValue+=1;
  counter.textContent=counterValue;
};

function decrement() {
    counterValue-=1;
    counter.textContent=counterValue;
  };
incrButton.addEventListener('click',increment);

decrButton.addEventListener('click',decrement);