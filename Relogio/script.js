function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}Hr.`
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'manha.png' 
        img.width="335" 
        img.height="300"
        document.body.style.background = '#ffe4e1'
    } else if (hora >= 12 && hora <= 18) {
        //Boa Tarde
        img.src = 'tarde.png'
        img.width="500" 
        img.height="363"
        document.body.style.background = '#f4a460'
    } else {
        //Boa Noite
        img.src = 'noite.png'
        img.width="470" 
        img.height="338"
        document.body.style.background = '#000080'
    }
}
