//EXERCÍCIO 1
//Mudar a cor de um elemento com evento do js.

//1º estruturar dois quadrados com cores diferentes na tela, um azul e outro amarelo.

//2º fazer um botão que quando clicado troque a cor do primeiro quadrado (o azul)

//3º selecionar o botão e definir o que evento que ocorrerá 

//4º selecionar o quadradoAzul (que terá a cor modificada)


const btnTrocaCor = document.getElementById('btn-troca-cor');

const quadradoAzul = document.querySelector('.quadradoAzul');

btnTrocaCor.addEventListener('click', trocarCorQuadradoAzul);


//Para mudar a cor de fundo podemos adicionar e remover as classes que o elemento tem

function trocarCorQuadradoAzul() {
  quadradoAzul.classList.remove('quadradoAzul');
  quadradoAzul.classList.add('quadradoAmarelo');
}

