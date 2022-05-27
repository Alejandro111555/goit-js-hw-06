const inputSizeControl = document.querySelector('#font-size-control');
const controlledText = document.querySelector('#text');
controlledText.style.fontSize=inputSizeControl.value+'px';



inputSizeControl.addEventListener('input',changeOfSize);
 
function changeOfSize (event) {
    controlledText.style.fontSize = event.currentTarget.value + "px";
}