/*Objetivo 1 - quando o usuario clicar no de mostrar deve abrir os projetos que estão escondidos no html
   Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuárioclicar em cima dele

   Passo 2 - Identificar o clique no botão

   Passo 3 - adicionar a classe "ativo" nos projetos escondidos

Objetivo 2 - esconder o botão de mostrar mais 
    Passo 1 - pegar o botão e esconder ele
 */

    //Objetivo 1 - quando o usuario clicar no de mostrar deve abrir os projetos que estão escondidos no html

    //Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuárioclicar em cima dele  

const botaoNostrarProjetos = document.querySelector('btn-mostrar-projetos');
//variavel dizendo para projetos não ativos
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo')

                                //função de seta
botaoNostrarProjetos.addEventListener('click', () =>{
    //Passo 3 - adicionar a classe "ativo" nos projetos escondidos

});
