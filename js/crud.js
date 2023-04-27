document.querySelector("#salvar").addEventListener("click", cadastrar)

function cadastrar() {
    const nome = document.querySelector("#nome").value
    const valor = document.querySelector("#valor").value
    const descricao = document.querySelector("#descricao").value
    const estilo = document.querySelector("#estilo").value

    const jogo = {
        nome,
        valor,
        descricao,
        estilo
    }

    document.querySelector("#jogos").innerHTML += criarCard(jogo)
}

function apagar(botao){
    console.log(botao)
    botao.parentNode.parentNode.parentNode.remove()
}

function criarCard(jogo) {
    const card = `
    <div class="card col-lg-3 col-md-6 col-sm-12 text-bg-dark p-3">
    <div class="card-header" id="titulo-jogo">
        ${jogo.nome}
    </div>
    <div class="card-body">
        <p class="card-text">${jogo.descricao}</p>
        <span class="badge text-bg-warning">R$${jogo.valor},00</span>
        <p class="card-text">${jogo.estilo}</p>
    </div>
    <div class="card-footer">
        <a href="#" class="btn btn-success" title="Adicionar ao carrinho">
            <i class="bi bi-check2"></i>
        </a>
        <a href="#" onClick="apagar(this)" class="btn btn-danger" title="Remover">
            <i class="bi bi-x"></i>
        </a>
    </div>
    </div>
    ` //template literals

    return card
}
