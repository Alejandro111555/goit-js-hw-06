// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.

const input = document.getElementById('validation-input');

input.addEventListener('blur',verificationSymbols);

function verificationSymbols  (event) {
   function removeClass() {input.classList.remove('valid','invalid');
    }
   
    if (event.currentTarget.value.length == input.dataset.length) { removeClass();
      input.classList.add ('valid') ;
    } else { removeClass(); input.classList.add('invalid'); }
}


