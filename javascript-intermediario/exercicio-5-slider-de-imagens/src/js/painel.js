//Variáveis que vão armazenar os elementos que iremos interagir

//Variável que vai conter todas as imagens. Isso vai retornar uma lista dos elementos que tem a classe .slide
const imagens = document.querySelectorAll(".slide");

//Variáveis para as setas
const setaVoltar = document.getElementById("seta-voltar");

const setaAvancar = document.getElementById("seta-avancar");

let imagemAtual = 0;


//Adicionando evento
setaAvancar.addEventListener("click", function() {


    if (imagemAtual === imagens.length - 1){
        return;
    }


    esconderImagemAberta();

    //Agora precisamos acessar a lista de imagens, para saber qual é o slide atual que estamos e adicionar 1, para então adicionar a classe mostrar

    imagemAtual++;
    imagens[imagemAtual].classList.add("mostrar");

    mostrarOuEsconderSetas();

});


setaVoltar.addEventListener("click", function() {

    if (imagemAtual === 0 ){
        return;
    }

    esconderImagemAberta();

    imagemAtual--;

    imagens[imagemAtual].classList.add("mostrar");

    mostrarOuEsconderSetas();

});


//Com essa função, vamos buscar qual imagem está aberta (que está com a classe mostrar), buscar a lista de classes dela e remover a classe mostrar (isso vai fazer com que ela seja escondida)

function esconderImagemAberta(){

    const imagemAberta = document.querySelector(".mostrar");

    imagemAberta.classList.remove("mostrar");
}


function mostrarOuEsconderSetas(){

    const naoEhAPrimeiraImagem = imagemAtual !== 0;

    if (naoEhAPrimeiraImagem){
        setaVoltar.classList.remove("opacidade");
    }else{
        setaVoltar.classList.add("opacidade");
    }

    const chegouNaUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length - 1;

    if (chegouNaUltimaImagem){
        setaAvancar.classList.add("opacidade");
    }else{
        setaAvancar.classList.remove("opacidade");
    }
}