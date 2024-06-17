let usuarios = [
  (usuario = {
    nome: "luiz",
    email: "fds@gmail.com",
    idade: "17",
  }),
];
console.log("Digite seu email");
process.stdin.on("data", function (data) {
  entrada.usuario = data.toString().trim().toLowerCase();

  usuarios.forEach((usuario) => {
    if (entrada_usuario == usuario.email) {
      console.log(entrada_usuario, "Disponivel");
      process.exit();
    } else {
      console.log(entrada_usuario, "indisponivel");
      console.log("Tente novamente");
    }
  });
});
