
const formulario = document.querySelector("form");

const chamados = [];

console.log("JavaScript carregado!");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const chamado = {
    id: chamados.length + 1,
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    setor: document.getElementById("setor").value,
    assunto: document.getElementById("assunto").value,
    prioridade: document.getElementById("urgencia").value,
    destino: document.getElementById("categoria").value,
    descricao: document.getElementById("descricao").value,
    status: "Aberto",
    dataAbertura: new Date().toISOString(),
    dataFechamento: null,
};

    chamados.push(chamado);
    console.table(chamados);
    console.log(chamado);
    console.log(chamados);
    renderizarTabela();

    alert("Chamado cadastrado com sucesso!");
});

function renderizarTabela(){


    const lista = document.getElementById("lista-chamados");

    lista.innerHTML = "";

    chamados.forEach(chamado => {

        lista.innerHTML += `
            <tr>
                <td>${chamado.id}</td>
                <td>${chamado.nome}</td>
                <td>${chamado.assunto}</td>
                <td>${chamado.status}</td>
                <td>${chamado.prioridade}</td>
                <td>
                    ${new Date(chamado.dataAbertura).toLocaleString("pt-BR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit"
                    })}
                </td>

                <td>
                    ${
                        chamado.status !== "Fechado"
                        ?
                        `<button onclick="finalizarChamado(${chamado.id})">
                            Finalizar
                        </button>`
                        :
                        "✅"
                    }
                </td>
            </tr>
        `;
    });
    
}

function finalizarChamado(id){

    const chamado = chamados.find(
        chamado => chamado.id === id
    );

    chamado.status = "Fechado";

    chamado.dataFechamento = new Date().toISOString();

    renderizarTabela();
}

function finalizarChamado(id){

    const confirmou = confirm(
        "Foi enviada uma devolutiva ao solicitante informando a solução do chamado?"
    );

    if(!confirmou){
        alert("O chamado não pode ser encerrado sem retorno ao solicitante.");
        return;
    }

    const chamado = chamados.find(
        chamado => chamado.id === id
    );

    chamado.status = "Fechado";
    chamado.dataFechamento = new Date().toISOString();

    renderizarTabela();
}
