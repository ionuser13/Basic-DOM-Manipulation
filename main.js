//create variables that represent the selectors of every HTML element
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const clase = document.getElementsByClassName("class");
const pid = document.getElementById("pid");
const input = document.querySelector("input");
//these are functions and methods to select the elements from HTML
console.log(input.value);
console.log({
    h1, p, clase, pid, input
})
//write and edit HTML from JS
h1.innerText = "Chiste genérico <br> bonito";//Text doesn't interpret language

console.log(h1.getAttribute("class")) //reads the attribute of an element
h1.setAttribute("class", "red") //changes the attribute of an element

h1.classList.add("blue")//works specially for classes; adds a class
h1.classList.remove("red")//removes a class
h1.classList.toggle("yellow")// adds o removes a class depending if its there
console.log(h1.classList.contains("blue"))//returns true or false if the element has the class or not

input.value = "777";

//create an element from scratch

const img = document.createElement("img");//create an image
img.setAttribute("src", "https://images.freeimages.com/images/large-previews/5a2/red-space-1496755.jpg");//we set an attribute, in this case, a source for the image
//console.log(img)
pid.innerHTML = "";
pid.append(img);
img.setAttribute("width", "200px")
