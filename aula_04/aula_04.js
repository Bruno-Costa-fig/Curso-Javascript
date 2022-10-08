// # Estruturas condicionais
// ## Simples: if
// if(1 < 8 && 4 >= 7){
//   // aqui vai oq precisa ser executado caso for verdade
//   // bloco verdade
// }

// // ## Composta: if, else
// if(5 % 2 == 0){
//   console.log("par")

// } else {
//   // aqui vai a exceção
//   console.log("impar")

//   // bloco falso
// }

// // ## Concatenada (em cadeia): if, else if ... else
// if(// aqui vai a condição){

// } else if() {

// } else if() {

// }

// operador ternário
// var tipo = 8
// // var resultado = condicao ? bloco verdade : bloco falso
// var resultado = tipo % 2 == 1 ? "impar" : "par"
// console.log(resultado)

// operador switch (comutação)
var numero = 8
var tipoFuncionario = "Zelador"

debugger
switch(tipoFuncionario){
  case "Assistente":
    // aqui vai o bloco verdade
    break
  case "Diretor":
    // aqui vai o bloco verdade
    break
  case "Secretário":
    break
  case "Professor":
    console.log("é professor")
    break
  default:
    
    // aqui vai o valor default
    break
}


// # Estruturas de repetição: laço for e while