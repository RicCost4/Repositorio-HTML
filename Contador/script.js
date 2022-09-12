function contar(){
    let ini = document.getElementById('txti') //let éo mesmo que var
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || pas.value.length == 0 || fim.value.length == 0 ){
        //alert('[ERRO] Faltam dados!') - se quizer colocar um alert de erro
        res.innerHTML = `Impossivel Contar\u{1F635}`
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if(p<=0){
            alert('Passo Invalido! Considerando PASSO 1')
            p = 1
        }
        if(i < f){
            //contagem crescente
            for(let c=i; c <= f; c += p){
                res.innerHTML += `${c} \u{23F1} `
            }
        } else{
            //contagem decrescente
            for(let c=i; c>= f; c-= p){
                res.innerHTML += `${c} \u{23F1} `
            }
        }
        res.innerHTML += ` \u{1F973} FIM \u{1F973}`
    }
}
//site para colocar emojis = https://unicode.org/emoji/charts/full-emoji-list.html#1f92f