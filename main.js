//create variables that represent the selectors of every HTML element
//selectors
const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2")
const btn = document.querySelector("#btnCalcular");
const result = document.querySelector("#result");

function btnOnClick() {
    const sum = parseInt(input1.value) + parseInt(input2.value)
    result.innerText = "Resultado: " + sum

}