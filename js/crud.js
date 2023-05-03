document.querySelector("#salvar").addEventListener("click", cadastrar)

function cadastrar() {
    const nome = document.querySelector("#nome").value
    const valor = document.querySelector("#valor").value
    const descricao = document.querySelector("#descricao").value
    const estilo = document.querySelector("#estilo").value
    const imagemfundo = document.querySelector("#bg-image").value
    const platina = document.querySelector("#tf-platina").value
    const ouro = document.querySelector("#tf-ouro").value
    const prata = document.querySelector("#tf-prata").value
    const bronze = document.querySelector("#tf-bronze").value

    const jogo = {
        nome,
        valor,
        descricao,
        estilo,
        imagemfundo,
        platina,
        ouro,
        prata,
        bronze
    }

    document.querySelector("#jogos").innerHTML += criarCard(jogo)
}

function apagar(botao) {
    console.log(botao)
    botao.parentNode.parentNode.parentNode.remove()
}

function criarCard(jogo) {
    const card = `
    <div class="card col-lg-3 col-md-6 col-sm-12 text-bg-dark p-3" style="background-image: url(${jogo.imagemfundo});">
    <div class="card-header" id="titulo-jogo">${jogo.nome}</div>
    <div class="card-body">
        <p class="card-text">${jogo.descricao}</p>
        <p>
            <ul>
                <li><i class="bi bi-trophy-fill" id="platina" type="number">${jogo.platina}</i></li>
                <li><i class="bi bi-trophy-fill" id="ouro" type="number>${jogo.ouro}</i></li>
                <li><i class="bi bi-trophy-fill" id="prata" type="number">${jogo.prata}</i></li>
                <li><i class="bi bi-trophy-fill" id="bronze" type="number">${jogo.bronze}</i></li>
            </ul>
        </p>
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
