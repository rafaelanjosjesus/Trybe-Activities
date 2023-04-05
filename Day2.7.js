//Some todos os valores contidos no array e imprima o resultado. // Add all the values ​​contained in the array and print the result.
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
        let result = 0;
            for (let index = 0; index < numbers.length; index += 1) {
                result += numbers[index];
            }
                console.log(result);