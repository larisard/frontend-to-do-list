const inputTarefa = document.getElementById("tarefa-nova")

function adicionarTarefa(){
    const item = document.createElement("li")

    item.innerHTML = `
    <li>
    <span>${inputTarefa.value}</span>
    <button id="excluir">x</button>

</li>`;

    
const lista = document.querySelector("#lista")
    lista.appendChild(item)
    inputTarefa.value=""
}

function limparLista(){
    const lista = document.querySelector("#lista")
    lista.innerHTML =""

}




const botao_ad = document.querySelector("#btn-adicionar")
botao_ad.addEventListener("click", adicionarTarefa)

const botao_limpar = document.querySelector("#btn-limpar")
botao_limpar.addEventListener("click", limparLista )
