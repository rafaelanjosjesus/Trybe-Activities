//Exemplos // examples

let clientesTrybeBank = ['Ada', 'John', 'Gus', "Rafa"];

function cumprimentaCliente(cliente) {
  return 'Olá, ' + cliente + '. Essa é sua conta do TrybeBank'
}
console.log(cumprimentaCliente(clientesTrybeBank[3]));





let status = "Deslogado";

    function logarDeslogar() {
        if (status === "Deslogado"){
        status = "logado";
    }else {
        status ="Deslogado"
    }
    }
console.log(status);
logarDeslogar();
console.log(status);
logarDeslogar();
console.log(status);
console.log("O usuário está " + status + " no sistema TrybeBank"); 



function sacar(valor, saldo) {
    if(valor >= 1 && saldo >= 0){
        if(valor <= saldo){
            return "Saque realizado com sucesso. Novo saldado: R$ " + (saldo - valor) + ",00"; 
        }else {
            return "Saldo insuficiente. Seu saldo atual é: R$ " + saldo + ",00";
        }
    } else {
        return "Valor ou saldo inválido. O valor deve ser maior ou igual a 1 e saldo deve ser menor ou igual a 0.";
    }
}
console.log(sacar(2, 400));
console.log(sacar(2, -5));
console.log(sacar(2, 0));