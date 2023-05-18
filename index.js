// Accessing an element
// you can use document.getElementById, getElementByClassName, getElementByTagName
// you can also use querySelector and querySelectorAll
// LINK TO FOLLOW: https://www.codecademy.com/learn/fscp-building-interactive-websites-with-javascript/modules/fecp-javascript-and-the-dom/cheatsheet

// Modifying an element
// An element/node is represented as object. So basically to modify something, you have to find the right key and modify the value for that key. Key is also called property.

// Adding an element
// you can use append* related methods to add a element

// Traversing DOM
// parentNode (traversing up the DOM tree)
var secondChild = document.getElementById('second-child');
secondChild.parentNode // div
secondChild.parentNode.parentNode // body

// to access children of a parent (traversing down the DOM tree)
element.children

var heading = document.getElementById('heading');
console.log('heading', heading);
heading.innerHTML = 'Hello JS';

// getElementByTagName
var pList = document.getElementsByTagName('p') // returns a collection
pList[2] // returns the third element
pList[2].innerHTML = 'third para changed'

// creating a new element and adding it to the DOM
function myFunction() {
  // Create an "li" node:
  const node = document.createElement("li");
  node.innerHTML = 'Water'

  // Append the "li" node to the list:
  document.getElementById("myList").appendChild(node);
}
