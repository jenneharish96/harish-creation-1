var divElement = document.createElement("div");
var h1Element = document.createElement("h1");
var contant1 = document.createTextNode("hai");
var pElement = document.createElement("p");
var contant2 = document.createTextNode("hello");
var result1 = pElement.appendChild(contant2);
var result2 = h1Element.appendChild(contant1);
var result3 = divElement.appendChild(h1Element);
var result4 = divElement.appendChild(pElement)
console.log(divElement);