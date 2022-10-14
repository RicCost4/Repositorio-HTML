function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('{[ERRO] Verifique os dados, e tente novamente.')
    }else{
        var idade = ano - Number(fano.value)
        var radius = document.querySelectorAll("input[type='radio']") //Linha aonde seleciona o input da seleção criando uma variavel e convertendo.
        var gen = ''
        var img = document.createElement('img') //document.createElement(#) cria um novo elemento com a variavel atribuida
        img.setAttribute('id', 'foto') //atribui/incrementa status ao elemento HTML criada
        if (radius[0].checked) {
            gen = 'Homem'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'hbebe.jpg')
            } else if(idade < 18){
                //adolecente
                img.setAttribute('src', 'hadol.jpg')
            } else if(idade < 60){
                //adulto
                img.setAttribute('src', 'hadulto.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'hvelho.jpg')
            }
        }else if(radius[1].checked) {
            gen = 'Mulher'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'mbebe.jpg')
            } else if(idade < 18){
                //adolecente
                img.setAttribute('src', 'madol.jpg')
            } else if(idade < 60){
                //adulto
                img.setAttribute('src', 'madulto.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'mvelho.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`//##.innerHTML adicona/modifica conteudo da div(##)selecionada
        res.appendChild(img) //##.appendChild(#)incrementa novo conteudo HTML(#) na DIV(##) selecionada
    }
}