// ***********************************
// SHALLOW VS DEEP COPY
// ***********************************

// ******* Shallow Copy: *********

// It means that certain values or sub-values are still connected to original variables.
// Basically, if any of the fields of the objects are referenced to other objects they share the same memory address.

const employee = {
  name: 'Mathew',
  age: 35
};

const copyOfEmployee = employee;

// Before modification
// console.log('employee', employee);
// employee {name: "Mathew", age: 35}

// After modification
copyOfEmployee.age = 53;

// Here you would expect employee object wouldn't change, but copyOfEmployee
// and employee object both share same memory address
// console.log('employee', employee);
// employee {name: "Mathew", age: 53}
