/*
Implemente uma fila usando um array para simular o atendimento de uma
clínica. Crie as funções chegarPaciente(nome) (enqueue), chamarProximo()
(dequeue) e exibirFila(). Simule a chegada de 5 pacientes e o atendimento de 3,
exibindo o estado da fila a cada operação.
*/

const fila = [];

function chegarPaciente(nome) {
    fila.push(nome);
    console.log(`${nome} chegou à clínica.`);
    exibirFila();
}

function chamarProximo() {
    if (fila.length > 0) {
        const paciente = fila.shift();
        console.log(`Chamando: ${paciente}`);
    } else {
        console.log("Não há pacientes na fila.");
    }

    exibirFila();
}

function exibirFila() {
    console.log("Fila atual:", fila);
    console.log("-------------------");
}

chegarPaciente("Ana");
chegarPaciente("Bruno");
chegarPaciente("Carlos");
chegarPaciente("Daniela");
chegarPaciente("Eduardo");

chamarProximo();
chamarProximo();
chamarProximo();