let carrinho = {
  nome: "Paulo Sérgio",
  idade: 21,
  produtoValor: [[
    ["Monitor Pichau", 999.99],
    ["Gabinete Pichau", 250],
    ["Ventoinhas", 150],
    ["Mesa", 800]
  ]]
}
  
exibir(carrinho)

function exibir(carrinho){
  //console.log(`${carrinho.nome} comprou em seu aniverssário um ${carrinho.produtoValor[0][0]}`)
  for(let i = 0; i < carrinho.produtoValor.length; i++){
    console.log(`${carrinho.nome} em seu aniverssario comprou:`)
    console.log(carrinho.produtoValor[i][0])
  }
}