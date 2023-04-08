// Agora iremos escrever um programa que irá excluir um(a) cliente já existente do array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro, caso o parâmetro não seja do tipo string e caso o(a) cliente não exista dentro do array. // Now we are going to write a program that will delete an existing customer from the array of TrybeBank customers. Make sure that the function must receive a parameter of type string and print an error message, if the parameter is not of type string and if the client does not exist within the array.

let clientesTrybeBank = ["Raydesol", "Rafael", "Naruto"];
    function removeClient(cliente) {
        if (typeof cliente == 'string'){
            let clienteEncontrado = false;
            for (let index = 0; index < clientesTrybeBank.length; index += 1){
                if(cliente === clientesTrybeBank[index]) {
                    clientesTrybeBank.splice(index, 1);
                    clienteEncontrado = true;
                    return "Cliente escluido(a) com sucesso.";
                }
            }
            if(clienteEncontrado === false) {
                return "Cliente não encontrado"
            }
        }else {
            return "O parametro passado deve ser do tipo 'string'";
        }
    };
console.log(removeClient(false));
console.log(removeClient("Goku"));
console.log(removeClient("Naruto"));
console.log(clientesTrybeBank);