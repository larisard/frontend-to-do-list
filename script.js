const inputTarefa = document.getElementById("tarefa-nova")

function adicionarTarefa(){
    const item = document.createElement("li")

    item.innerHTML = `
    <li>
    <span>${inputTarefa.value}</span>
    <button id="excluir">x</button>

</li>`;

function excluirTarefa(){
    
}
    
const lista = document.querySelector("#lista")
    lista.appendChild(item)
    inputTarefa.value=""
}
const botao_ad = document.querySelector("#btn-adicionar")
botao_ad.addEventListener("click", adicionarTarefa)
