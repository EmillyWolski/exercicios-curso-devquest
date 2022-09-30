
let nomeUsuario = prompt('Qual é seu nome?')

verificaNomeUsuario(nomeUsuario)

function verificaNomeUsuario(nomeUsuario){
    while (nomeUsuario == ''){
        nomeUsuario = prompt('Por favor, digite seu nome.')
    }
    alert ('Bem vindo(a), ' + nomeUsuario + '!')
} 






