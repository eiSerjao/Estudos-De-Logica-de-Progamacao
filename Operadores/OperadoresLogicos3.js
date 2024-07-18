let tempoChuva = true
let guardaChuva = false
let sairdeCasa = (tempoChuva === false) || (guardaChuva === true)
sairdeCasa = "Pode sim!"

console.log("O personagem pode sair de casa? :" + sairdeCasa)