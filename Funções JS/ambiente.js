let num = [5,8,4] //vetor criado let/var com 3 indice
console.log(`Nosso vetor é o ${num}`)

num[3]=6 //parametro para adicionar uma nova indice determinada e o seu valor.
console.log(`Novo vetor é o ${num}`)

num.push(7) //parametro para adicionar um novo indice proximo com o valor.
console.log(`Nosso nosso vetor é o ${num}`)

num.length //comando para mostrar o tamanho do vetor.
console.log(`Tamanho do nosso vetor é o ${num.length}`)

num.sort() //comando para organizar os valores do vetor.
console.log(`Nosso vetor organizado ${num.sort()}`)

for(var pos=0;pos<num.length;pos++){ //for padrão de linguagem com contador.
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log(`for estrutura reduzida para vetor.`)
for(let pos in num){ //for especial para variaveis compostas.
    console.log(num[pos])
}

num.indexOf()//ira busca valores determinados pelo usuario no vetor.
console.log(`Indice do valor 4 é o ${num.indexOf(4)}`)
let valor = num.indexOf(2)
if(valor == -1){// se busca um valor que não esta no vetor, ira retorna -1, ai cria um if para declarar uma expressão mais sintatica.
    console.log('Valor não encontrado...')
}else{
    console.log(`Indice do valor é o ${valor}`)
}
console.log('FIM......')