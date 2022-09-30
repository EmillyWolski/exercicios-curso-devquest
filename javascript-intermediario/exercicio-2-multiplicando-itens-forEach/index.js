//EXERCÍCIO 2
//Criar um array com os seguintes números: 65, 44, 12 e 4. 
//Após a criação, utilizar o laço de repetição forEach para percorrer os itens e realizar a multiplicação de cada um por 10. 


let arrayDeMultiplicacao = [65, 44, 12, 4]
// console.log(arrayDeMultiplicacao)

function multiplicaItens(item){
    console.log(item * 10)
}

arrayDeMultiplicacao.forEach(multiplicaItens)
//resultado da multiplicação de cada um dos itens do array
