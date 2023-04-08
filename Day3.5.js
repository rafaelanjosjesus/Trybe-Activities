//Refatore a função removeCliente para diminuir sua complexidade e quebrá-la em funções menores. // Refactor the removeClient function to reduce its complexity and break it into smaller functions.

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// Primeiro passo: Defina a função validaCliente, que é responsável por validar se o parâmetro é do tipo string. // First step: Define the function validaCliente, which is responsible for validating whether the parameter is of type string .

function validaCliente(cliente) {
    if (typeof cliente !== 'string') {
        return "O parâmetro passado deve ser do tipo 'string'!";
    } else {
        return true;
    }
}

//Segundo passo: Defina a função clienteIndex, que é responsável por percorrer o array de clientes e encontrar o respectivo index. Caso não encontre nenhum(a) cliente, a função retornará false. // Second step : Define the function clienteIndex, which is responsible for traversing the array of customers and finding the respective index . If no customer is found, the function will return false .

function clienteIndex(cliente){
    for (let index = 0; index < clientesTrybeBank.length; index += 1) {
        if (cliente === clientesTrybeBank[index]) {
            return index;
        }
    }
    return false;
}

//Terceiro passo: Agora, refatore a função removeCliente. Primeiramente, implemente a validação do parâmetro cliente. Para deixar o código mais legível, armazene o retorno da função validaCliente em uma variável. // Third step : Now, refactor the function removeCliente. First, implement client parameter validation . To make the code more readable, store the function return validaClientein a variable.

function removeClient(cliente) {
    let validacao = validaCliente(cliente);
    if (validacao !== true) {
        return validacao;
}

//Quarto passo: Agora, chame a função clienteIndex para encontrar o indíce do(a) cliente no array. Caso o(a) cliente não seja encontrado(a), será retornada a mensagem de erro. // Fourth step : Now, call the function clienteIndexto find the customer's index in the array . If the client is not found, an error message will be returned.

let index = clienteIndex(cliente);
if (index === false) {
    return "Cliente não encontrado(a)."
}

//Quinto passo: Por fim, defina o propósito da função. Caso o parâmetro seja do tipo string e o índice do(a) cliente seja encontrado, a função deverá remover o(a) cliente do array. // Fifth step : Finally, define the function's purpose. If the parameter is of type string and the index of the customer is found, the function must remove the customer from the array .

clientesTrybeBank.splice(index, 1);
    return "Cliente excluido(a) com sucesso.";
}

    console.log(removeClient(false)); 
    console.log(removeClient('Barney')); 
    console.log(removeClient('John')); 
    console.log(clientesTrybeBank); 