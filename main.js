//create variables that represent the selectors of every HTML element
//selectors
const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2")
const btn = document.querySelector("#btnCalcular");
const result = document.querySelector("#result");

// form.addEventListener("submit", sumVarInputs)//funcion que MANDA A LLAMAR, no EJECUTAR

// function sumVarInputs(event) {
//     console.log({event})
//     event.preventDefault();
//     const sum = parseInt(input1.value) + parseInt(input2.value)
//     result.innerText = "Resultado: " + sum

// }
input1.addEventListener("mouseout", mensaje);
function mensaje(){
    alert("Buenos días")
}

btn.addEventListener("click", sumVarInputs)//funcion que MANDA A LLAMAR, no EJECUTAR

function sumVarInputs() {
    // console.log({event})
    // event.preventDefault();
    const sum = parseInt(input1.value) + parseInt(input2.value)
    result.innerText = "Resultado: " + sum

}