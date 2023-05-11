document.querySelector("#salvar").addEventListener("click", cadastrar)

let jogos = []

window.addEventListener("load", () => {
    jogos = JSON.parse(localStorage.getItem("jogos")) || []
    atualizar()
} )

function atualizar(){
    localStorage.setItem("jogos", JSON.stringify(jogos))
    document.querySelector("#jogos").innerHTML = " "
    jogos.forEach(jogo => 
        document.querySelector("#jogos").innerHTML += criarCard(jogo))

    const total = jogos.reduce(
        (acc, tarefa) => acc += Number(tarefa.valor), 0
    )

    const xpAdquirido = jogos
                        .filter(jogo => jogo.conquistado)
                        .reduce(
                            (acc, tarefa) => acc += Number(tarefa.valor), 0
                        )

    document.querySelector("#pontos").innerHTML = xpAdquirido + "/" + total + "XP"
}

function filtrar(lista){
    document.querySelector("#jogos").innerHTML = ""
    lista.forEach(jogo => 
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
        id: Date.now(),
        nome,
        valor,
        descricao,
        estilo,
        imagemfundo,
        platina,
        ouro,
        prata,
        bronze,
        conquistado: false
    }

    if (!isValid(jogo.nome, document.querySelector("#nome"))) return
    if (!isValid(jogo.valor, document.querySelector("#valor"))) return

    jogos.push(jogo)
    
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

function apagar(id){
    jogos = jogos.filter (jogo => jogo.id !== id)
    atualizar()
}

function conquistar(id){
    let jogoEncontrado =
    jogos.find(jogo=> jogo.id == id)
    jogoEncontrado.conquistado = true
    atualizar()
}

function criarCard(jogo) {
    let disabled = jogo.conquistado === true ? "disabled" : ""
    
    const card = `
    <div class="card col-lg-3 col-md-6 col-sm-12 text-bg-dark" style="background-image: url(${jogo.imagemfundo}); background-size: cover;">
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
        <span class="badge text-bg-warning">${jogo.valor}XP</span>
        <p class="card-text">${jogo.estilo}</p>
    </div>
    <div class="card-footer">
        <a onClick="conquistar(${jogo.id})" href="#" class="btn btn-success ${disabled}" title="100% Conquistado">
            <i class="bi bi-check2"></i>
        </a>
        <a onClick="apagar(${jogo.id})" href="#" class="btn btn-danger" title="Não Conquistado">
            <i class="bi bi-x"></i>
        </a>
    </div>
    </div>
    ` //template literals

    return card
}
