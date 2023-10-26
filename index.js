const express = require("express")
const app = express()
const path = require("path")

const caminhoBase = path.join(__dirname, "templates")

app.get('/', (requisicao, resposta) => {
     resposta.sendFile(`${caminhoBase}/index.html`)
   
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})  