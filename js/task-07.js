// Напиши скрипт, который реагирует на изменение значения input#font-size-control и изменяет инлайн-стиль span#text обновляя свойство font-size.
//  В результате при перетаскивании ползунка будет меняться размер текста.

const inputSizeControl = document.querySelector('#font-size-control');
const controlledText = document.querySelector('#text');
controlledText.style.fontSize=inputSizeControl.value+'px';

inputSizeControl.addEventListener('input',changeOfSize);
 
function changeOfSize (event) {
    controlledText.style.fontSize = event.currentTarget.value + "px";
}