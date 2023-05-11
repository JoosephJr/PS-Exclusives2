document.querySelector("#filtrar_naoconquistados").addEventListener("click", () => {
    let jogosFiltrados = jogos.filter(jogo => !jogo.conquistado)
    filtrar(jogosFiltrados)
})

document.querySelector("#filtrar_conquistados").addEventListener("click", () => {
    let jogosFiltrados = jogos.filter(jogo => jogo.conquistado)
    filtrar(jogosFiltrados)
})

document.querySelector("#buscar").addEventListener("keyup", () => {
    let busca = document.querySelector("#buscar").value
    let jogosFiltrados = jogos.filter(jogo => jogo.nome.includes(busca))
    filtrar(jogosFiltrados)
})

