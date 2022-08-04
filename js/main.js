"use strict";



// Task 1

const colors = ['red', 'green', 'blue'];

console.log(colors.length); 



// Task 2
const animals = ['monkey', 'dog', 'cat']

console.log(animals[animals.length - 1]); 



// Task 3
/* const numbers = [5, 43, 63, 23, 90];
console.log(numbers.splice(0,4));   */


// Task 4

const students = ['Polina', 'Dasha', 'Masha'];

/// последний элемент
students.pop(2);
students.push('Borya');


/// первый элемент
students.shift();
students.unshift('Andrey');


console.log(students);


// Task 5
const cats = ['Gachito', 'Tom', 'Batman'];

for(let i = 0; i < cats.length; i++){
console.log(cats[i]);
}

