// Exemplo usado no dia a dia

let userName01 = getFirsName01("Paulo Sérgio Barros de Souza")
console.log("Olá " + userName01)

//Situação onde separamos por espaço
function getFirsName01(name){
  let firstname = name.split(" ")[0]
  return firstname
}

userName01 = getFirsName02("Leornado-Chargas-da-Silva")
console.log("Olá " + userName01)

//Situação onde separamos por traço
function getFirsName02(name){
  let firstname = name.split("-")[0]
  return firstname
}