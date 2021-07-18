// ***********************************
// SHALLOW VS DEEP COPY
// ***********************************

// ******* Shallow Copy: *********
// ***********************************

// It means that certain values or sub-values are still connected to original variables.
// Basically, if any of the fields of the objects are referenced to other objects they share the same memory address.

const employee = {
  name: 'Mathew',
  age: 35
};

const copyOfEmployee = employee;

// Before modification
// console.log('employee=>', employee);
// employee=> {name: "Mathew", age: 35}

// After modification
copyOfEmployee.age = 53;

// Here you would expect employee object wouldn't change, but copyOfEmployee
// and employee object both share same memory address
// console.log('employee=>', employee);
// employee=> {name: "Mathew", age: 53}

// ********* Deep Copy **********
// ***********************************

// Unlike the shallow copy, deep copy makes a copy of all attributes of the old object and allocates separate memory addresses for the new object.
// This helps us to create a cloned object without any worries about changing the values of the old object.
// There are many ways to create a deep copy depending upon the object structure but which works for all kinds is JSON.parse() with JSON.stringify().

const student = {
  name: 'Scott',
  grade: 7
};

const clonedStudent = JSON.parse(JSON.stringify(student));

// Before Modification
// console.log('student=>', student); // student=> {name: "Scott", grade: 7}

// console.log('Cloned Student=>', clonedStudent);
// Cloned Student=> {name: "Scott", grade: 7}

// After modification
clonedStudent.name = 'Brad';
clonedStudent.grade = 6;

// Here student object will not change.
// console.log('student=>', student);
// student=> {name: "Scott", grade: 7}

// Only the cloned object is modified
// console.log('Cloned Student=>', clonedStudent);
// Cloned Student=> {name: "Brad", grade: 6}

// ********* Primitive data types ********
// *****************************************

// When you create a copy of primitive data types, you don’t need to worry as they are tightly coupled with the variable. So it will be always a real copy.

const q1 = 75;
let q2 = q1;

// Before modification
// console.log("q1: ", q1);
// console.log("q2: ", q2);
// q1:  75
// q2: 75

const p1 = 'blue';
let p2 = p1;
// console.log('p1: ', p1); // p1:  blue
// console.log('p2: ', p2); // p2:  blue

// After modification
q2 = 7;

// console.log('q1: ', q1);
// console.log('q2: ', q2);
// q1:  75  // => See it is not modified
// q2: 57   // => See it is modified

p2 = 'red';
// console.log('p1: ', p1); // p1:  blue
// console.log('p2: ', p2); // p2:  red

// ****** Composite Data Types ******
// ************************************

// 1. Arrays  (technically they are also objects, so they behave in the same way).
// 2. Objects

// When you create a composite data type, the values are actually stored once when instantiated, and assigning a variable just creates a reference to that value.

const person = {
  name: 'Christian',
  age: 35
};

// Before Modification
const copyOfPerson = person;
// console.log('copyOfPerson: ', copyOfPerson); // copyOfPerson:  {name: "Christian", age: 35}

// After modification
copyOfPerson.age = 53;
// console.log('person: ', person); // person:  {name: "Christian", age: 53}

// both copyOfPerson and person both share the same memory address. So, modifiying one of these two modify another too.

// This is often problematic since we expect the old variable to have original values, not the changed ones.

// Let's check different ways to copy composite data type

// ********** ARRAYS *********
// *******************************

// For copying, arrays are similar to copying objects, since arrays are also objects.

// ****** SPREAD OPERATOR *******

// Technically it doesn’t provide a complete deep copy.
// It only provides deep copy if the arrays are not nested arrays or 2D or 3D etc.
// If the arrays are nested arrays, it provides a deep copy to the first instance of the values and all the nested arrays are shallow copies.

// Nested arrays
const arrOne = [1, 2, [3, 4], 5];
const arrTwo = [...arrOne];

// Before Modification
// console.log('arr1: ', arrOne); // arr1:  (4) [1,2, [3,4], 5]
// console.log('arr2: ', arrTwo); // arr2:  (4) [1,2, [3,4], 5];

// After modification
arrTwo[0] = 0;
arrTwo[2][1] = null;

// See what is changed
// console.log('arr1: ', arrOne); // [1, 2, [3, null], 5];
// console.log('arr2: ', arrTwo); // [0, 2, [3, null], 5];

// Here the nested values of c will change but the first initial value won't.
// Because using spread operator it doesn't provide deep copy with nested arrays.

// Array Methods - Map, ForEach, and Slice
// ****************************************

// All of these methods return a new array but they do not provide complete deep copy, similar to the spread operator it doesn’t provide deep copy for nested arrays.

// ****** MAP *******

const arrOriginal = [1, 2, [3, 4]];
const arrThree = arrOriginal.map(el => el);
// console.log('arrThree: ', arrThree); // [1, 2, [3, 4]];

// After modification
arrThree[0] = 100; // modify the values of outer array
arrThree[2][1] = null; // modify the values of nested array

// see what is modified
// console.log('arrThree: ', arrThree); // [100, 2, [3, null]];
// console.log('arrOriginal: ', arrOriginal); // [1, 2, [3, null]];

// ********* SLICE **********

const arrNew = [1, [2, 3], 4];
const arrFour = arrNew.slice(0);

// Before modification
// console.log('arrFour: ', arrFour);
// arrFour:  [1, [2, 3], 4];

// After modification
arrFour[2] = 404;
arrFour[1][1] = null;

// see what is changed =>
// console.log('arrFour: ', arrFour); // [1, [2, null], 404];
// console.log('arrNew: ', arrNew); //  [1, [2, null], 4];

// ForEach

const myArray1 = [[1, 2], 3, 4];
const myArray2 = [];

myArray1.forEach(el => myArray2.push(el));

// Before Modification
// console.log('myArray1: ', myArray1); // [[1, 2], 3, 4];
// console.log('myArray2: ', myArray2); // [[1, 2], 3, 4];

// After Modification
myArray2[0][1] = null; // modify the nested array
myArray2[2] = 404; // modify outer array

// See the changes
// console.log('myArray1: ', myArray1); // [[1, null], 3, 4];
// console.log('myArray2: ', myArray2); // [[1, null], 3, 404];

// JSON Parse and Stringify method
// ****************************************

// The best way to copy objects without any worry is JSON methods which provide complete Deep Copy.

// But you can create your own custom functions for a deep copy for nested arrays or you can use external libraries like JQuery and lodash.

const myArray3 = [1, [2, 3], 4];

const deepCopy1 = JSON.parse(JSON.stringify(myArray3));

// Before modification
// console.log('Original: ', myArray3); // Original:  (3) [1, [2, 3], 4]

// console.log('deepCopy: ', deepCopy1); // deepCopy:  (3) [1, [2, 3], 4]

// After modification

deepCopy1[0] = 111;
deepCopy1[1][1] = null;

// console.log('Original: ', myArray3); // [1, [2, 3], 4];  => NO change
// console.log('deepCopy', deepCopy1); // [111, [2, null], 4];  => All changes

// OBJECTS
// *****************************************

// ******** Object.assign() *********

// When using the assign method we have to make sure the object copies at least a second argument.
// Normally you would just pass an empty object as the first argument. It doesn’t provide a complete deep copy similar to the spread operator.

const user1 = {
  name: 'Princess',
  age: 35,
  salary: {
    annual: '100K',
    hourly: 50
  }
};

const copyOfUser1 = Object.assign({}, user1);

// Before Modification

// console.log('User: ', user1); // User:  {name: "Princess", age: 35, salary: {annual:'100K', hourly:50}};
// console.log('Copied User1: ', copyOfUser1); // Copied User:  {name: "Princess", age: 35, salary: {annual:'100K', hourly:50}};

// After Modification
copyOfUser1.name = 'Jennifer';
copyOfUser1.salary.annual = '200K';

// console.log('User1: ', user1); // User:  {name: "Princess", age: 35, salary: {annual:'200K', hourly:50}};
// console.log('Copied User1: ', copyOfUser1); // Copied User1:  {name: "Jennifer", age: 35, salary: {annual:'200K', hourly:50}};

// ********** Object.create() **********

// This method creates a new object using an existing object as the prototype of the newly created object.
// The existing object is made available as a prototype making all the properties available to the new object.
// But in terms of copying it provides partial deep copying like assign and spread operator.

const user2 = {
  name: 'Sunita',
  age: 25,
  salary: {
    annual: '80K',
    hourly: 40
  }
};

const copyOfUser2 = Object.create(user2);

// Before Modification
// console.log("User2: ", user2) // User2:  {name: "Sunita", age: 25, salary: {annual:'80K', hourly:40}}
// console.log("Copy of User2: ", copyOfUser2) // Copy of User2:  {};

// After Modification
copyOfUser2.name = 'Rawan';
copyOfUser2.salary.annual = '202K';

// See the modification
// console.log("User2: ", user2) // User2:  {name: "Sunita", age: 25, salary: {annual:'202K', hourly:40}}
// console.log("Copy of User2: ", copyOfUser2) // Copy of User2:  // User2:  {name: "Rawan"}

// ******** Spread Operator *********

const user3 = {
  name: 'Devyani',
  age: 45,
  salary: {
    annual: '300K',
    hourly: 80
  }
};

const copyOfUser3 = { ...user3 };

// Before Modification

// console.log('User3: ', user3);
// User3:  {name: "Devyani", age: 45, salary: { annual: '300K', hourly: 80 }}
// console.log('copyOfUser3: ', copyOfUser3);
// copy Of User3:  {name: "Devyani", age: 45, salary: { annual: '300K', hourly: 80 }}

// After modification
copyOfUser3.name = 'Kalawati';
copyOfUser3.salary.annual = '303K';

// console.log('User3: ', user3);
// User3:  {name: "Devyani", age: 45, salary: { annual: '303K', hourly: 80 }}
// console.log('copyOfUser3: ', copyOfUser3);
// copy Of User3:  {name: "Kalawati", age: 45, salary: { annual: '303K', hourly: 80 }}

// *************************************
// DEEP COPY

// If we know the depth of the nested objects we can use the nested spread operator to achieve deep copy.
// But if the depth is unknown then it’s better to avoid spread operator for a deep copy.

const user4 = {
  name: 'Tripti',
  age: 23,
  salary: {
    annual: '100K',
    hourly: 35
  }
};

const deepCopyOfUser4 = { ...user4, salary: { ...user4.salary } }; //=>DEEP COPY

// Before modification
// console.log('User4: ', user4);
// User4:  {name: "Tripti", age: 23, salary: {annual: "100K", hourly: 35}}
// console.log('deepCopyofUser4', deepCopyOfUser4);
// deepCopyofUser4 {name: "Tripti", age: 23, salary: {annual: "100K", hourly: 35}}

// After modification
deepCopyOfUser4.name = 'Elon Musk';
deepCopyOfUser4.salary.annual = '202K';

// console.log('User4: ', user4);
// User4:  {name: "Tripti", age: 23, salary: {annual: "100K", hourly: 35}}
// console.log('deepCopyofUser4', deepCopyOfUser4);
// deepCopyofUser4 {name: "Elon Musk", age: 23, salary: {annual: "202K", hourly: 35}}

// ***** JSON Parse and Stringify method ****

// The best way to copy objects without any worry is JSON methods which provide complete Deep Copy.
// But you can create your own custom functions for a deep copy for nested arrays or you can use external libraries like JQuery and lodash.

const user5 = {
  name: 'Bill Gates',
  age: 53,
  salary: {
    annual: '200K',
    hourly: 55
  }
};

const copyOfUser5 = JSON.parse(JSON.stringify(user5));

// console.log('User5', user5);
// User5 {name: "Bill Gates", age: 53, salary: {annual: "200K", hourly: 55}}
// console.log('copyOfUser5', copyOfUser5);
// copyOfUser5 {name: "Bill Gates", age: 53, salary: {annual: "200K", hourly: 55}}

// After Modification
copyOfUser5.name = 'Joe Biden';
copyOfUser5.salary.annual = '505K';

// console.log('User5', user5);
// User5 {name: "Bill Gates", age: 53, salary: {annual: "200K", hourly: 55}}
// console.log('copyOfUser5', copyOfUser5);
// copyOfUser5 {name: "Joe Biden", age: 53, salary: {annual: "505K", hourly: 55}}

