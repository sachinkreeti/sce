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


// Function
// normal function
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

