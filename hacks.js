// *************************************
// Javascript Hacks
// *************************************

// 1. Resize the array using an array.length
// *************************************

const a = ['a', 'b', 'c'];
// console.log(a); // (3) ["a", "b", "c"]
a.length = 5;
// console.log(a.length);  //5
a.length = 2;
// console.log(a); (2) ["a", "b"];
a.length = 0;
// console.log(a); // []

// 2. Swapping of two values
// *************************************

let text1 = 'Apple';
let text2 = 'Windows';

// console.log('Text 1: ' + text1); // Text 1: Apple
// console.log('Text 2: ' + text2); // Text 2: Windows

// Traditional way
let textOld = text1; // assign text1 to a new value
text1 = text2; // assign text2 to text1;
text2 = textOld; // re-assign original value of text1 to text2;
// console.log('Text 1: ' + text1); // Text 1: Windows
// console.log('Text 2: ' + text2); // Text 2: Apple

// Modern way of Swapping
let first = 123;
let second = 321;
// console.log('First: ' + first); // 123
// console.log('Second: ' + second); // 321

[first, second] = [second, first];

// console.log('First: ' + first); // 321
// console.log('Second: ' + second); // 123

// 3. Concatening two or more arrays
// *************************************

// Traditional way
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8];
let arr3 = arr1.concat(arr2);
// //This will Create a new array arr3 and then will push contents fo arr1 and arr2 in arr3 which will consume lot of memory.

// console.log(arr3); // (8) [1, 2, 3, 4, 5, 6, 7, 8]

// Modern way without causing server overload
let r1 = [1, 2, 3];
let r2 = [11, 22, 33];
r1.push.apply(r1, r2); // it will only push the content of array b in array a.
// console.log(r1); // (6) [1, 2, 3, 11, 22, 33]

// 4. Use Filter in a different way
// *************************************

let array = [
  null,
  undefined,
  { name: 'Douglas' },
  { name: 'Nicky' },
  { name: '' },
  null
];

// let newArray = array.filter(item=>{
//   item.name.length > 0;
// }
//   ) // TypeError: Cannot read property 'name' of null at Array.filter

// we can use filter with Boolean to remove null and undefined values.

newArray = array.filter(Boolean).filter(el => el.name.length > 0);

// console.log(newArray);  // [{"name":"Douglas"}, {"name":"Nicky"}];

let array11 = array.filter(item => {
  return typeof item === 'object' && item !== null;
});

// console.log(array11);
// [{name: "Douglas"}, {name: "Nicky"}, {name: ""}]

// 5. Iterate on the map from 0 to n.
// *************************************

let newMap = [...Array(10)].map((item, index)=> index);

// console.log(newMap);  // (10) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]