var heading = document.getElementById('heading');
console.log('heading', heading);
heading.innerHTML = 'Hello JS';

// parentNode
var secondChild = document.getElementById('second-child');
secondChild.parentNode // div
secondChild.parentNode.parentNode // body

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

