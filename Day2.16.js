//Faça um algoritmo que indique se um número definido em uma variável é primo ou não. Um número é classificado como primo se ele é maior do que 1 e divisível apenas por 1 e por ele mesmo, ou seja, a divisão dele por quaisquer outros números dá resto diferente de zero. Lembrando que números primos, são números naturais, ou seja, também não podem ser divididos por números negativos Exemplos: 13 é um número primo, pois é divisível por 1 e por 13, apenas. Já o número 20 não é primo, pois pode ser dividido por 1, 2, 4, 5, 10 e 20, todos com resto zero. // Write an algorithm that indicates whether a number defined in a variable is prime or not.A number is classified as prime if it is greater than 1 and divisible only by 1 and itself, i.e. dividing it by any other numbers gives a remainder different from zero. Remembering that prime numbers are natural numbers, that is, they cannot be divided by negative numbers either Examples: 13 is a prime number, as it is divisible by 1 and 13 only. The number 20 is not prime, as it can be divided by 1, 2, 4, 5, 10 and 20, all with zero remainder.


//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    //for (let index = 1; index < numbers.length; index += 1) {
        //for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
            //if (numbers[index] < numbers[secondIndex]) {
                //let position = numbers[index];
                    //numbers[index] = numbers[secondIndex];
                        //numbers[secondIndex] = position;
            //}
        //}
    //}
//console.log(numbers);
//Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja valor seguinte, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push.

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let newArray = [];
    //for (let index = 0; index < numbers.length; index += 1) {
        //if(index < (numbers.length - 1)) {
            //newArray.push(numbers[index] * numbers[index + 1]);
        //}else {
            //newArray.push(numbers[index] * 2);
        //}
    //}
//console.log(newArray);

//Agora, trabalhe com algumas formas geométricas! Utilize a estrutura de repetição for para escrever os códigos a seguir.Escreva um algoritmo que, dado um valor n positivo, ou seja, n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n. Por exemplo:

let n = 5;
let symbol = "*";
let inputLine = "";
    for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
        inputLine = inputLine + symbol;
    };
    for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
        console.log(inputLine);
    }