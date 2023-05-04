document.querySelector("#salvar").addEventListener("click", cadastrar)

let jogos = []



window.addEventListener("load", () => {
    jogos = JSON.parse(localStorage.getItem("jogos")) || []
    if (jogos == null) jogos = []
    atualizar()
    
} )

function atualizar(){
    jogos.forEach(jogo => 
        document.querySelector("#jogos").innerHTML += criarCard(jogo))
}

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
    const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"))

    const jogo = { //JSON Java Script Object Notation
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

    if (!isValid(jogo.nome, document.querySelector("#nome"))) return
    if (!isValid(jogo.valor, document.querySelector("#valor"))) return

    jogos.push(jogo)
    localStorage.setItem("jogos", JSON.stringify(jogos))

    atualizar()
    modal.hide()
}

function isValid(valor, campo){
    if(valor.length == 0){
        campo.classList.add("is-invalid")
        campo.classList.remove("is-valid")
        return false
    }else{
        campo.classList.add("is-valid")
        campo.classList.remove("is-invalid")
        return true
    }
}

function apagar(botao) {
    console.log(botao)
    botao.parentNode.parentNode.remove()
}

function criarCard(jogo) {
    const card = `
    <div class="card col-lg-3 col-md-6 col-sm-12 text-bg-dark p-3" style="background-image: url(${jogo.imagemfundo}); background-size: cover;">
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
