class NotasDosAtletas {
  constructor(atletas){
    this.atletas = atletas
  }
  
  notasMedias(atl) {
    let notas = atl.notas.sort(function compararNumeros(a, b) {
    return a - b;
    }) 
    let notasfinais = notas.slice(1, 4)
    let soma = 0
    notasfinais.forEach(function(nota){
   soma = soma + nota
    }) 
     let mediaValida =  soma / notasfinais.length
    
    return console.log(`Atleta: ${atl.nome}, Notas Obtidas: ${atl.notas.reverse()}, Média Válida: ${mediaValida}`)
}
  
}

let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];


let dadosDosAtletas= new NotasDosAtletas(atletas)

for (let i = 0; i < atletas.length; i++) {
dadosDosAtletas.notasMedias(atletas[i])
}