//Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra. // Use the repetition structure forto write two algorithms: one that prints the largest word in this array to the console and another that prints the smallest. Consider the number of characters in each word.

let array = ["Java", "Javascript", "python", "html", "Css"];
let biggestWord = array[0];
let smallestWord = array[0];
    for (let index = 1; index < array.length; index += 1) {
        if (array[index].length > biggestWord.length) {
            biggestWord = array[index];
        }
    }
    for (let index = 1; index < array.length; index += 1) {
        if (array[index].length < smallestWord.length) {
          smallestWord = array[index];
        }
      }
      
console.log(biggestWord);
console.log(smallestWord);