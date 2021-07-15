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
