/*
Implemente uma pilha usando um array para simular o histórico de um
navegador. Crie as funções visitar(pagina) (push), voltar() (pop) e paginaAtual()
(peek). Simule uma sessão: visite 4 páginas, volte 2 vezes e exiba a página atual a
cada operação.
*/

const historico = [];


function visitar(pagina) {
    historico.push(pagina);
    console.log(`Visitando: ${pagina}`);
    paginaAtual();
}


function voltar() {
    if (historico.length > 0) {
        const paginaRemovida = historico.pop();
        console.log(`Voltando da página: ${paginaRemovida}`);
    } else {
        console.log("Histórico vazio.");
    }

    paginaAtual();
}

function paginaAtual() {
    if (historico.length > 0) {
        console.log(`Página atual: ${historico[historico.length - 1]}`);
    } else {
        console.log("Nenhuma página aberta.");
    }

    console.log("------------------");
}


visitar("Google");
visitar("YouTube");
visitar("GitHub");
visitar("ChatGPT");

voltar();
voltar();