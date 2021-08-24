// Navigation
// 1.children - array of elements
// 2.childNodes - (array of all the Nodes - text + elements)
// 3.firstChild - text node of that element
// 4.lastChild - last text node of that element
// 5.firstElementChild - first element
// 6.lastElementChild - last element
// 7.previousSibling - previous sibling next node
// 8.nextSibling -next sibling next node
// 9.previousElementSibling - previous sibling element
// 10.nextElementSibling - next sibling element
// 11.parentElement / parentNode - parent of an element 


let parentEl = document.getElementById("parent");
console.log(parentEl);

let parentEl1 = document.getElementById("parent");
console.log(parentEl1.firstChild);

let parentEl2 = document.getElementById("parent");
console.log(parentEl2.lastChild);

let parentEl3 = document.getElementById("parent");
console.log(parentEl3.children);

let parentEl4 = document.getElementById("parent");
console.log(parentEl4.childNodes);

let parentEl5 = document.getElementById("parent");
console.log(parentEl5.firstElementChild);

let parentEl6 = document.getElementById("parent");
console.log(parentEl6.lastElementChild);

let parentEl7 = document.getElementById("parent");
console.log(parentEl7.children[3]);

let midpara = document.getElementById("para");
console.log(midpara);

let midEl = document.getElementById("para");
console.log(midEl.nextElementSibling);

let midEl1 = document.getElementById("para");
console.log(midEl1.previousElementSibling);

let midEl2 = document.getElementById("para");
console.log(midEl2.parentElement);