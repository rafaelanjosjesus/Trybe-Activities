//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”. // Find out how many odd values ​​are in the array and print the result. If none exists, print the message: “No odd value found”.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
    for (let index = 0; index < numbers.length; index += 1){
        if (numbers[index] %2 !== 0) {
            result +=1;
        }
    }
    if (result === 0) {
        console.log("no odd value found");
    } else {
        console.log(result);
    }
