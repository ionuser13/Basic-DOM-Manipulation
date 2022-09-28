//create variables that represent the selectors of every HTML element
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const clase = document.querySelector(".class");
const pid = document.querySelector("#pid");
const input = document.querySelector("input");
//these are functions and methods to select the elements from HTML
console.log(input.value);
console.log({
    h1, p, clase, pid, input
})
//write and edit HTML from JS
h1.innerText = "Chiste genérico <br> bonito";//Text doesn't interpret language

console.log(h1.getAttribute("pantalla")) //reads the attribute of an element
h1.setAttribute() //changes the attribute of an element