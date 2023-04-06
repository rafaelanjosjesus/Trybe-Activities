//O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10. // The factorial is the multiplication of a natural number by its predecessors, except zero. Based on this information, create an algorithm that prints the factorial of 10 on the screen.

let fatorial = 1;
    for (let index = 10; index > 0; index -= 1) {
        fatorial *= index;
    }
console.log(fatorial);