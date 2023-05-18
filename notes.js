// Object

// declaring empty object
var obj = {}

// declaring person object
var person = {
  fname: 'Ram',
  lname: 'Kumar',
  age: 20,
  address: {
    pinCode: 123456,
    city: 'Kolkata',
    state: 'WB'
  },
  fullName: function () {
    console.log(this.fname + ' ' + this.lname)
  }
}

// accessing any attribute
person['fname']
person.fname

// printing it on console
console.log(person.fname);
console.log(person.fullName());

// adding more attribute
person.language = 'Hindi'

// Reference
// both are pointing to the same reference
var person2 = person

person2.name = 'Mohan' // this will modify person too

// to copy object at one level
var person3 = { ...person }

// modifying a shallow copied object
person3.name = 'Bob' // this does not modify either person or person2

// modifying nested object
person3.address.pinCode = 121212 // this will modify person & person2 both

var person4 = { ...person, address: { ...person.address } };
person4.address.pinCode = 565656
console.log('person4', person4);

// assigning fname and lname
var fname = person.fname;
var lname = person.lname;
var pinCode = person.address.pinCode;


var a = person.fname;
var b = person.lname;

// destructuring
var { fname: a, lname: b } = person;
var { fname: fname, lname: lname } = person;
var { fname, lname } = person;



var { fname, lname } = person;
console.log('fname', fname);
console.log('lname', lname);


// Function
// 1. normal function
function sum(a, b) {
  return a + b;
}

sum(5, 6);
sum(5, 6, 7) // Error: wrong number of argument passed

// function with optional argument
function sum(a, b, c = 5) {
  return a + b + c;
}

sum(5, 6);
sum(5, 6, 7) // No error

// function with spread operator
function foo(a, ...rest) {
  console.log(a)
  console.log(rest)
}

foo(2,3,4,5)

function sum(...args) {
  var total = 0;

  for (var i =0; i< args.length; i++) {
    total = total + args[i];
  }

  return total;
}

var value = sum(2,3,4,5,6,7,7,100);
console.log('total', value);

// 2. second way of declaring function (maybe it is called function statement - verify)
var sum = function (a, b) {
  return a + b;
}

// 3. arrow function
var sum = (a, b) => {
  return a + b;
}

// modify arrow function to return if only one line of code is present
var sum = (a, b) => a + b;


function foo() {
  console.log('foo was called');
}

function bar() {
  console.log('bar was called');
}

foo()
bar()

// function calling another function
function foo(func1) {
  func1()
  console.log('foo was called');
}

function bar() {
  console.log('bar was called');
}

foo(bar);

// passing function as an argument
function operation(a, b, func) {
  func(a,b)
}

function sum(a,b) {
  console.log('sum', a+b);
}

operation(2,3,sum);

// returning a function
function greet(prefix) {
  function greetPerson(name) {
    console.log(prefix + ' ' + name);
  }

  return greetPerson;
}

var greetPerson = greet('Good Morning');
greetPerson('Ram');

// ================================================================
// setTimeout
setTimeout(func, time_in_millisecond)

setTimeout(function () {
  console.log("Hello World");
}, 3000)

function helloWorld() {
  console.log("Hello World");
}

setTimeout(helloWorld, 3000);


// setInterval
setInterval(func, time_in_millisecond)

setInterval(function () {
  console.log("Hello World");
}, 3000);

setInterval(helloWorld, 3000);

// Hoisting
// - moves variable declarations to the top

function foo() {
  var a = 10;
  let b = 20;
  const c = 30;
}

// ================================================================
// Scope
// var/let & const
// var - function scoped
// let & const - block scoped

function sum() {
  var a = 10;
  let b = 20;
  const c = 30;

  if (true) {
    let d = 40;
  }

  console.log('a, b, c, d', a, b, c, d);
  return a + b + c + d;
}



function sum() {
  var a = 5;
  var b = 10;
  return a + b;
}

function sum() {
  let a = 5;
  let b = 10;
  return a + b;
}

function sum() {
  var a = 5;
  var b = 10;

  if(a > 2) {
    var c = 10;
  }

  console.log('a, b, c', a, b, c);

  return a + b + c;
}

function sum() {
  var a = 5;
  var b = 10;

  if(a > 100) {
    var c = 10;
  }

  console.log('a, b, c', a, b, c);

  return a + b + c;
}

function sum() {
  let a = 5;
  let b = 10;

  if(a > 2) {
    let c = 10;
  }

  console.log('a, b, c', a, b, c);

  return a + b + c;
}

// Closure - passing and returning functions - counter example
function counter() {
  var count = 0;

  function increment() {
    count++;
    console.log('count', count);
  }

  return increment;
}

var incrementOuter = counter()
incrementOuter();

// Promise
// Fetch
// JS-single threaded
// Uncaught ReferenceError: c is not defined

fetch('https://dummyjson.com/products/1')
  .then(res => res.json())
  .then(json => console.log(json))


// hoisting
console.log('a', a);
debugger;

var a = 10;
let b = 20;
const c = 30;

// blocking a thread
// for(var i = 1; i < 100000; i++) {
//   for(var j = 1; j < 100000; j++) {
//     for(var k = 1; k < 100000; k++) {
//       for(var l = 1; l < 100000; l++) {
//         var x = 89304;
//         var y = 9999;
//         var z = x * y;
//       }
//     }
//   }
// }
