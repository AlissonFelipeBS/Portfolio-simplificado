/*
    Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos escondidos no html

        Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele
*/

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')
const logoAtualizarPagina = document.querySelector('.logo')

// Recurso - Ao clicar no logo da página irá atualizar
logoAtualizarPagina();

//Passo 2 - identificar o clique no botão
botaoMostrarProjetos.addEventListener('click', () => {

    //Passo 3 - adicionar a classe ativo nos projetos escondidos
    mostrarMaisProjetos();

    /*
    Objetivo 2 - esconder o botão de mostrar mais
    Passo 1 - pegar o botão e esconder ele
    */
    esconderBotao();
});

function logoAtualizarPagina() {
    logoAtualizarPagina.addEventListener('click', () => {

        location.reload();

    });
}

function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
