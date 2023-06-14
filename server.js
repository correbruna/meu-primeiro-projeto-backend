const express = require("express")
//**pedindo o pocate express. computador pegue o pacote express e deixe aqui disponivel no meu código para utilizar sempre que for necessario*/

const app = express()
//**aplicação*/
const porta = 3333

function mostraPorta() {
  console.log("Servidor criado e rodando na porta ", porta)
}

app.listen(porta, mostraPorta)
//**computador apos ouvir a porta 3333, quero que vce execute a função mostrPorta.*/