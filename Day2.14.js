//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente. // Use the repetition structure forto develop an algorithm that is able to reverse a word, such as the word “banana” to “ananab”. Use the string below as an example. Then swap it out for others to check if your algorithm is working correctly.

let word = "Banana";
let reverseWord = "";
    for (let index = 0; index < word.length; index += 1) {
        reverseWord += word[word.length - 1 - index];
    }
console.log(reverseWord);