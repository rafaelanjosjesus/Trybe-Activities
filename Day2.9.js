//Utilizando for, descubra o maior valor contido no array e imprima-o. // Using for, find the largest value contained in the array and print it.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let higherNumber = numbers[0];
    for(let index = 1; index < numbers.length; index += 1) {
        if(numbers[index] > higherNumber) {
            higherNumber = numbers[index];
        }
    }
console.log(higherNumber);