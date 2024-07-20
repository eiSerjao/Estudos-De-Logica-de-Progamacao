//Exemplo de interpolação de classe
createStringConnection("dp_products", "Serjão", "591234")

function createStringConnection(databaseName, user, pass){
  console.log(`connect:DBCONNECT;user=${user};pass=${pass};initial_database=${databaseName}`)
}