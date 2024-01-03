window.onload = function() {
    createInput();
}

let inputCount = 1; // Счетчик для отслеживания количества полей
let maxInputCount = 3; // Максимальное количество полей
let checkWord = 'it\'s quarter past seven';

function createInput() {
    if (inputCount <= maxInputCount) {
        let input = document.createElement('input');
        input.setAttribute('placeholder', 'Введите текст');
        input.setAttribute('id', 'input' + inputCount);
        document.getElementById('inputs').appendChild(input);
        inputCount++;
    } else {
        alert('Достигнуто максимальное количество полей.');
    }
}

function checkText() {
    let inputs = document.querySelectorAll('input');
    let textToCheck = inputs[inputs.length - 1].value; //Проверяем только последнее введенное значение
    alert(inputs[inputs.length - 1].value);
    for (let i = 0; i < inputs.length - 1; i++) {
        if (inputs[i].value !== textToCheck) {
            alert('Текст в полях ввода не совпадает. = ');
            return;
        }
    }
    if (textToCheck !== checkWord) {
        alert('Текст в полях ввода не совпадает с проверочным словом.');
        return;
    }
    alert('Текст в полях ввода совпадает.'+inputCount);
    createInput();
}

window.onload = function() {
    createInput();
}