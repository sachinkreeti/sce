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

// Function

