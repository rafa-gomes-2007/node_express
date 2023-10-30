const express = require("express")
const app = express()
const path = require("path")

const caminhoBase = path.join(__dirname, "templates")

// http://localhost:3000/usuarios/20
app.get('/usuarios/:id',(requisicao, resposta) => {
    const id = requisicao.params.id
    console.log(id)
    resposta.sendFile(`${caminhoBase}/usuarios.html`)
})
// http://localhost:3000
app.get('/', (requisicao, resposta) => {
     resposta.sendFile(`${caminhoBase}/index.html`)
   
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})  