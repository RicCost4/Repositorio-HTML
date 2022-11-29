import { adicionarNumero, sortearO1, sortearO2 } from "./sortear.js"

let addNumero = document.getElementById("iAddNumero")
let numInicial = document.getElementById("inumInicial")
let numFinal = document.getElementById("inumFinal")
let btnInp1 = document.getElementById("add")
let btnInp2 = document.getElementById("srt1")
let btnInp3 = document.getElementById("srt2")
let msn = document.getElementById("mensagem")
let resultado = document.getElementById("retorno")
const lista = []

btnInp1.addEventListener('click', function(){
    
    const n = Number(addNumero.value)

    return adicionarNumero(n, lista, msn, addNumero)
})

btnInp2.addEventListener('click', function(){

    return sortearO1(lista, resultado)
})

btnInp3.addEventListener('click', function(){

    const nI = Number(numInicial.value)
    const nF = Number(numFinal.value)
    return sortearO2(nI, nF, resultado, numInicial, numFinal)
})