//Faça um programa para adicionar clientes ao array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro caso o parâmetro não seja do tipo string. // Write a program to add customers to TrybeBank's customer array . Make sure that the function must receive a parameter of type string and print an error message if the parameter is not of type string .
let clientesTrybeBank = ["Rafa", "Noel", "Enza"];
    function adicionaCliente(cliente){
        if (typeof cliente === "string") {
            clientesTrybeBank.push(cliente);
            return "Cliente adicionado(a) com sucesso!";
        } else {
            return 'O parâmetro passado deve ser do tipo "string"';
        }
    }
console.log(adicionaCliente(true))
console.log(adicionaCliente("Rafael"));
console.log(clientesTrybeBank);
