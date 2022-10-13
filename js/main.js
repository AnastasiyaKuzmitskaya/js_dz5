"use strict";



// Task 1

const colors = ['red', 'green', 'blue'];

console.log(colors.length); 



// Task 2
const animals = ['monkey', 'dog', 'cat']

console.log(animals[animals.length - 1]); 



// Task 3
////1 cпособ
const numbers = [5, 43, 63, 23, 90];
console.log(numbers.splice(0,5));  

console.log(numbers);  

////2 cпособ


for(let i=0; 0<numbers.length; i++){
  numbers.pop();
}
console.log(numbers); 


// Task 4

const students = ['Polina', 'Dasha', 'Masha'];

/// последний элемент

students.splice(2, 1, 'Borya');

/// первый элемент

students.splice(0, 1, 'Andrey');

console.log(students);


////второй способ
students.pop(2);
students.push('Borya'); 



students.shift();
students.unshift('Andrey'); 

console.log(students);

// Task 5

const cats = ['Gachito', 'Tom', 'Batman'];
/// цикл for
for(let i = 0; i < cats.length; i++){
console.log(cats[i]);
}

/// цикл for of
const catss = ['Gachito', 'Tom', 'Batman'];

for(let elem of catss){
    console.log(elem);
    }




    // Task 6


    const evenNumbers = [2, 4, 6, 8, 10];
    const oddNumbers = [1, 3, 5, 7, 9];

    const newNumbers = evenNumbers.concat(oddNumbers);
    console.log(newNumbers);

    
    console.log(evenNumbers.indexOf(8));


      // Task 7 

      const binary = [0, 0, 0, 0];

      console.log(binary.join('1'));




      