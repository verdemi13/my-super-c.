function insert(number){
    document.form.textview.value =
    document.form.textview.value + number;
}

function clean() {
    document.form.textview.value = "";
}

function deleteP() {
    let number =     document.form.textview.value;
    document.form.textview.value = number.substring(0, number.length-1)
    
}

function calculate() {
    let number =     document.form.textview.value;
    if (number) {
        document.form.textview.value = eval (number) .toFixed(1);
    }
}

function square() {
    let number = document.form.textview.value;
    if (number) {
        document.form.textview.value = number * number;
    }
}



































// const annaAge = prompt("Напишите возраст анны: ");

// alert("Нашей анне "+annaAge+" лет");

// const myAge=255;

// if (myAge< 240) {
//     alert("Your age less than 240 years old!")
// }

// else if (myAge < 255) {
//     alert("Your age less than 255 years old!")
// }

// else {
//     alert("Your age more than 255 years old!")
// // }

// const firstNumber = Number(prompt("Напишите первое число!"));
// const operator = prompt("Задайте оператор +,-,*,/");
// const secondNumber = Number(prompt("Напишите второе число:"));

// let result;

// if (operator =='+') {
//     result = firstNumber + secondNumber
// }

// else if (operator == '-') {
//     result = firstNumber - secondNumber;
// }

// else if (operator == '*') {
//     result = firstNumber * secondNumber;
// }

// else if (operator == '/') {
//     result = firstNumber / secondNumber;
// }

// else {
//     alert("Вы ввели неправильные данные!")
// }

// prompt(`${firstNumber} ${operator} ${secondNumber} = ${result}`);