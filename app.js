'use strict'
const botaoTrocarFruta = document.getElementById('trocar-fruta')
const inputFruta = document.getElementById('fruta')
const botaoAutomatico = document.getElementById('automatico')

const conjuntoImagens = {
        "banana": './img/banana.jpeg',
        "apple": './img/maçã.jpg',
        "strawberry": './img/morango.jpg',
        "grape": './img/uva.jpg',
        "pineapple": './img/abacaxi.jpeg',
}

let intervalo = null

botaoTrocarFruta.addEventListener('click', trocarFruta);

function trocarFruta() {
    let  frutaPesquisa = document.getElementById('fruta').value.toLowerCase();

    let imagens = conjuntoImagens

    if (imagens[frutaPesquisa]) {
        frutaCampo.style.backgroundImage = `url('${imagens[frutaPesquisa]}')`;
    } else {
        alert('Fruta não encontrada! Suas opções são: banana, grape, pineapple, strawberry e apple')
    }
}

function automatico() {
    if (intervalo) {
        clearInterval(intervalo)
        intervalo = null
        botaoAutomatico.textContent = "Automatico"
    } else {
        let frutas = Object.keys(conjuntoImagens)
        let indice = 0 

        intervalo = setInterval (() => {
            document.documentElement.style.setProperty(
                "--bg-imagens",
                `url('${conjuntoImagens[frutas[indice]]}')`
            )
            inputFruta.value = frutas[indice]
            indice = (indice + 1) % frutas.length
        }, 1500)

        botaoAutomatico.textContent = 'Parar'
    }
}

botaoAutomatico.addEventListener('click', automatico);