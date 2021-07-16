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


