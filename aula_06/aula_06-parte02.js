class Pessoa {
  nome;
  dataNascimento;

  constructor(nome = "Breno", dataNascimento = "06/08/1990") {
    this.nome = nome
    this.dataNascimento = dataNascimento
  }

  CalcularIdade(){
    let ano = this.dataNascimento.split("/")[2]

   console.log(new Date().getFullYear() - ano)
  }
}

class Aluno extends Pessoa {
  matricular(nomeCurso){
    this.nomeCurso = nomeCurso
  
    // console.log("Aluno " + this.nome + " está matriculado no curso " + this.nomeCurso)
    console.log(`Aluno ${this.nome} está matriculado no curso ${this.nomeCurso}`)
  }
}

var a1 = new Aluno("Bruno", "25/01/1999")

a1.matricular("POO")


