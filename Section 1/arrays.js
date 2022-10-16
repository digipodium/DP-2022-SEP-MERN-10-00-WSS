// JavaScript Arrays
// 1. Any type of data can be stored 
// 2. Arrays can be modified
// 3. Array size is not fixed

let marks = 345;
let studentMarks = [ 45, 76, 23, 78, 60 ];

console.log( studentMarks.length );

let fruits = ['Orange', 'Pineapple', 'Cherry', 'Banana', 'Guava', 'Apple'];

// Indexing

// index of banana
console.log( fruits[3] );

// undefined is returned if index is invalid
console.log( fruits[10] );

console.log(fruits.at(-4));
console.log( fruits.indexOf('Apple') );


// Slicing
console.log( fruits.slice(1, 4) );

// Adding elements to array

// push function is used all element at the end of the array.
fruits.push('kiwi');

// unshift adds elements at the start of an array
fruits.unshift('tomato');

console.log(fruits);

// Removing elements
fruits.pop() // remove element from end of array
fruits.shift() //remove element from start of array
console.log(fruits);

fruits.splice(4, 3);
console.log(fruits);