class Animal {
  tipo;

  constructor(tipo) {
    this.tipo = tipo
  }

  ExecutarComportamento(comportamento){
    console.log(comportamento)
  }
}


var jacare = new Animal("Jacaré")

jacare.ExecutarComportamento("Jacaré está nadando")


var sabia = new Animal("Sabiá")

sabia.ExecutarComportamento("O Sabía está voando")