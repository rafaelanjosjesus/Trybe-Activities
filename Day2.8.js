//Calcule e imprima a média aritmética dos valores contidos no array. // Calculate and print the arithmetic mean of the values ​​contained in the array .

    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let sum = 0;

    for (let index = 0; index < numbers.length; index  += 1) {
        sum += numbers[index];
    }

    let average = sum / numbers.length;
        console.log(average);
            
//Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”. // Based on the code you just generated, make this: if the final value is greater than 20, print the message “Value greater than 20”; and, if it is not greater than 20, print the message “Value less than or equal to 20”.

if(average > 20) {
    console.log("Value greater than 20")
} else {
    console.log("Value less than or equal to 20")
}