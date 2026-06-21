/*
Implemente uma lista ligada simples usando nós ({ valor, proximo }). Crie as
funções adicionar(tarefa), remover(tarefa) e exibir() que percorre todos os nós.
Simule um gerenciador de tarefas: adicione 4 tarefas, remova uma pelo nome e
exiba a lista antes e depois.
*/

let cabeca = null;

function adicionar(tarefa) {
    const novoNo = {
        valor: tarefa,
        proximo: null
    };

    if (cabeca === null) {
        cabeca = novoNo;
        return;
    }

    let atual = cabeca;

    while (atual.proximo !== null) {
        atual = atual.proximo;
    }

    atual.proximo = novoNo;
}

function remover(tarefa) {
    if (cabeca === null) {
        return;
    }

    // Se a tarefa estiver na cabeça
    if (cabeca.valor === tarefa) {
        cabeca = cabeca.proximo;
        return;
    }

    let atual = cabeca;

    while (atual.proximo !== null) {
        if (atual.proximo.valor === tarefa) {
            atual.proximo = atual.proximo.proximo;
            return;
        }

        atual = atual.proximo;
    }
}

function exibir() {
    let atual = cabeca;

    console.log("Lista de tarefas:");

    while (atual !== null) {
        console.log("- " + atual.valor);
        atual = atual.proximo;
    }

    console.log("------------------");
}