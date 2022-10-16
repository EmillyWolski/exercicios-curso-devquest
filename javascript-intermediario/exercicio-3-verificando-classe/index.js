//EXERCÍCIO 3
//Verificar se um elemento possui uma classe e alterar sua cor.


// // Passo 1 - Pegar o elemento do quadrado azul aqui no JS.
// const quadrado = document.querySelector(".quadrado");


// // Passo 2 - Quando o usuário clicar no quadrado, precisamos disparar a ação de VERIFICAR SE A COR DO QUADRADO É A COR AZUL.

// quadrado.addEventListener('click', () => {

// 		// Passo 3 - Criamos uma varíavel que irá verificar se a classe contém a cor azul.
//     const classeAzulExiste = quadrado.classList.contains('azul');

// 		// Passo 4 - Fazer a verificação utilizando essa varíavel criada, se ela existir, é removida a classe azul do quadrado. 
//     if (classeAzulExiste) {
//         quadrado.classList.remove("azul");
//     } 
//     else {
// 				// Passo 5 - Caso NÃO TENHA/ESTEJA COM A COR AZUL NO QUADRADO, é adicionada a classe AZUL e o alerta deve ser disparado.

//         quadrado.classList.add("azul");
// 	      alert("Esse quadrado TEM a classe azul!");  
//     }
// });



//REESCRITA 

//Passo 1 - Pegar o quadrado da tela
const quadrado = document.querySelector('.quadrado')


//Passo 2 - Fazer o evento de click para o quadrado. Quando clicar deve verificar se existe a cor azul nesse quadrado


quadrado.addEventListener('click', () => {

  //Passo 3 - criamos uma variável para ver se a classe contém a cor azul
  const classeAzulExiste = quadrado.classList.contains('azul');

  //Passo 4 - fazer a verificação usando essa variável, se existir, remove a classe azul do quadrado

  if (classeAzulExiste){
    quadrado.classList.remove('azul');
  }
  else{

    //Passo 5 - Caso não tenha a classe azul no quadrado, é necessário adicionar ela e o alerta deve ser disparado

    quadrado.classList.add('azul');
    alert('Esse quadrado TEM a classe azul!');
  }
})











