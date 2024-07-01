function mensagem() {
    op = 0
    at = 0
    ind = 0
    console.log("Digite 1 para marcar uma consulta")
    console.log("Digite 2 para listas suas consultas")
    console.log("Digite 3 para atualizar uma consulta")
    console.log("Digite 4 para cancelar sua consulta")
}
let op;
let at;
let ind;
let consultas = []
let consultasmarcadas = []
let listar;
let medicos = ["Luiz", "Claudio", "Feromonas", "Cleiton",]

mensagem();
process.stdin.on("data", function (data) {
 let entrada_usuario = data.toString.trim()

if (!op) {
    op = Number(entrada_usuario);
    if (op == 1) {
        console.log("Nome completo?")
    } else if (consultasmarcadas.length == 0) { // corrigir
    console.log("Nao existem consultas marcadas")
    mensagem();
    }
         

    }
   }






}