// result = document.getElementById("result").value
// equal = document.querySelector(".equal")
// operator = document.querySelector(".operator")
// button = document.getElementById("button")
// console.log(button)

let display = document.getElementById('display');

function Display(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function del(){
    display.value = display.value.slice(0, -1);
}

function calculate() {

    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
