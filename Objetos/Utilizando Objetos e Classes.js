class formaDeBolo{
  constructor(saborDaMassa, saborDoRecheio){
    this.saborDaMassa = saborDaMassa
    this.saborDoRecheio = saborDoRecheio
  }

  imprimir(){
    console.log(` O sabor da massa deste bolo é de ${this.saborDaMassa} e seu recheio é de ${this.saborDoRecheio}`)
  }

  assar(){
    console.log(`Assando bolo de ${this.formaDeBolo}!`)
  }
}

let boloDeMorango = new formaDeBolo("trigo","morango")

boloDeMorango.imprimir()