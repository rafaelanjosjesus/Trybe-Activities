//Utilizando for, descubra o menor valor contido no array e imprima-o. // Using for, find the smallest value contained in the array and print it.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallernumber = numbers[0];
    for (let index = 1; index < numbers.length; index += 1){
        if (numbers[index] < smallernumber) {
            smallernumber = numbers[index];
        }
    }
console.log(smallernumber);