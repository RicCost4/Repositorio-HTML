import { validarNaLista, validarNumero } from "./funcoes.js"

export function adicionarNumero(n, l, html, addN) {

    if (validarNumero(n) && !validarNaLista(n, l)) {
        l.push(n)
        // console.log(n) //retorno console
        // console.log(l) //retorno console
        html.innerHTML = `Valor ${n} adicionado`
    } else {
        html.innerHTML = `Valor invalido ou ja encontrado na lista.`
    }
    addN.value = ''
    addN.focus()
}

export function sortearO1(l, html) {
    // console.log(l) //retorno console

    const numeroGerado = Math.floor(Math.random(l) * l.length)
    html.innerHTML = `O número sorteado foi: ${l[numeroGerado]}`
    // console.log(numeroGerado) //retorno console
}

export function sortearO2(nInicial, nFinal, html, htmlNumI, htmlNumF) {

    const lista = []
    
    if (nInicial >= 1 && nFinal > nInicial){
        for(let c = nInicial; c <= nFinal; c++){
            lista.push(c)
        }
        const numeroGerado = Math.floor(Math.random(lista) * lista.length)
        html.innerHTML = `O numero sorteado foi: ${lista[numeroGerado]}`
        htmlNumI.value = ''
        htmlNumF.value = ''
        htmlNumI.focus()

    }else{
        html.innerHTML = `Números invalido, digite novamente.`
    }
}