// Javascript Hacks

// 1. Resize the array using an array.length
const a = ['a', 'b', 'c'];
// console.log(a); // (3) ["a", "b", "c"]
a.length = 5;
// console.log(a.length);  //5
a.length = 2;
// console.log(a); (2) ["a", "b"];
a.length = 0;
// console.log(a); // []

// 2. Swapping of two values
let text1 = 'Apple';
let text2 = 'Windows';

console.log('Text 1: ' + text1); // Text 1: Apple
console.log('Text 2: ' + text2); // Text 2: Windows

// Traditional way
let textOld = text1; // assign text1 to a new value
text1 = text2; // assign text2 to text1;
text2 = textOld; // re-assign original value of text1 to text2;
console.log('Text 1: ' + text1); // Text 1: Windows
console.log('Text 2: ' + text2); // Text 2: Apple

// Modern way of Swapping
let first = 123;
let second = 321;
console.log('First: ' + first); // 123
console.log('Second: ' + second); // 321

[first, second] = [second, first];

console.log('First: ' + first); // 321
console.log('Second: ' + second); // 123
