function tab(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        alert('Por Favor, digite um numero')
    } else {
        let n = Number(num.value)
        c = 1
        tab.innerHTML = ''

        while (c<=10){
            res = n*c
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${res}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }

}