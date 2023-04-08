//Desenvolva cada exercício a seguir com o uso de funções.Considere a variável saldo, que representa a quantia em conta de determinada(o) cliente do TrybeBank e escreva quatro programas que:Adicione um valor ao saldo.Subtraia um valor do saldo.Multiplique o valor do saldo por uma taxa.Divida o valor do saldo. // Develop each exercise below using funções.Consider the balance variable, which represents the amount in the account of a certain TrybeBank customer, and write four programs that:Add an amount to the balance.Subtract an amount from the balance.Multiply the balance amount by a rate.Divide the balance amount.

let saldo = 1000;

function somaSaldo(valor){
    return valor + saldo;
};
function subtraiSaldo(valor){
    return saldo - valor;
};
function MultiplicaSaldo(valor){
    return saldo * valor;
};
function divideSaldo(valor) {
    return saldo / valor
};

console.log(somaSaldo(1000));
console.log(subtraiSaldo(900));
console.log(MultiplicaSaldo(10));
console.log(divideSaldo(2));