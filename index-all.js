// console.log("Hello!!")

// var car = {
//   name: "Fiat",
//   model: 500,
//   weight: '850kg',
//   color: 'red',
//   start: function () {
//     console.log('Starting...');
//   },
//   drive: function () {
//     console.log('Driving...');
//   },
//   brake: function () {
//     console.log('Brake...');
//   },
//   stop: function () {
//     console.log('Stopping');
//   }
// }

// car.start();
// car.drive();
// car.brake();
// car.stop();

var person1 = {
  fname: "Ram",
  lname: "Kumar",
  age: 20
}

var person2 = person1;

var person1 = {
  fname: 'Ram',
  lname: 'Kumar',
  age: 20,
  address: {
    pinCode: 828190,
    city: 'Delhi'
  }
}

var person2 = person1;
var person3 = { ...person1 };

person3.fname = 'Mohan';

console.log('person3', person3);
console.log('person1', person1);

person3.address.city = 'Mumbai';
console.log('updated city of person3', person1);
// =====================

var person1 = {
  fname: 'Ram',
  lname: 'Kumar',
  age: 20,
  address: {
    pinCode: 828190,
    city: 'Delhi'
  }
}

person4 = { ...person1, address: { ...person1.address } }

person4.address.city = 'Kolkata';
console.log('person1', person1);
console.log('person4', person4);


var person1 = {
  fname: 'Ram',
  lname: 'Kumar',
  age: 20,
  address: {
    pinCode: 828190,
    city: 'Delhi'
  },
  father: {
    fname: 'Mohan',
    lname: 'Kumar',
    address: {
      pinCode: 123456,
      city: 'Mumbai'
    }
  },
  mother: {
    fname: 'Sita',
    lname: 'Kumari',
    address: {
      pinCode: 123456,
      city: 'Mumbai'
    }
  }
}

// 1. person2 -> name: "Bob",
// 2. person2 -> address -> City: Vegas

var person2 = { ...person1 }
person2.fname = "Bob";

var person3 = { ...person1, fname: 'Bob' }
console.log('person2', person2);
console.log('person3', person3);

var person4 = {
  ...person1,
  fname: 'Bob',
  address: { ...person1.address, city: 'Vegas' }
}

console.log('person4', person4);

person4.address.city = 'Hyderabad'

console.log('person1', person1);
