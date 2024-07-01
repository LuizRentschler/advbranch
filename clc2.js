let opcao
let consultas = [];
let consulta = {};
console.log("desejas oq")
console.log("1. Consulta")
console.log("listas")
console.log("afaf")
console.log("afga")
process.stdin.on("data", function(data) {
    let entrada = data.toString.trim()
    if (!opcao) {
        opcao = entrada
    } else {
        switch (opcao)) {
            case '1':
                if (!consulta.paciente) {
                    consultasmarcadas.paciente = entrada;
                    console.log("Médico:")
                } else if (!consulta.medico) {
                    consulta.medico = entrada
                    console.log("Data:")
                } else  {
                consulta.horario = entrada
                consultas.push(consulta)
                console.log("Consulta agendada
                
                
                '")
                opcao = undefined
                }
                
                console.log("Inserindo consulta")
                break;
                case '2':
                console.log("Listando consultas")
                break;
                case '3':
                console.log("Desmarcando consulta")
                break;
                case '4':
                    if (!indiceAtualizar) {
                  indiceAtualizar = entrada 
                  console.log("Qual atributo voce deseja mudar")
                  let atributos = Object.keys(consultas[indiceAtualizar])
                  for (let i=0; i < atributos.length; i++) {
                    console.log(atributos[i])
                  }
                    }
                
                break;   
       }
    
        console.log("Digite outra opcao")
    }});
