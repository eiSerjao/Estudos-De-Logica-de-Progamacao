let carrinho = {
  nome: "Paulo Sérgio",
  idade: 21,
  produtoValor: [
    ["Monitor Pichau", 999.99],
    ["Gabinete Pichau", 250],
    ["Ventoinhas", 150],
    ["Mesa", 800]
  ],
}

exibir(carrinho)

function exibir(carrinho,){

  let total = 0

  console.log(`${carrinho.nome} em seu aniverssario comprou:`)
  
  for(let i = 0; i < carrinho.produtoValor.length; i++){
    console.log(`- ${carrinho.produtoValor[i][0]} $: ${carrinho.produtoValor[i][1]}`)
    total += carrinho.produtoValor[i][1]
  }

  console.log(`Valor total dos produtos: R$ ${total}`)
}