const express = require("express")
const app = express()
const path = require("path")

const caminhoBase = path.join(__dirname, "templates")

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.post('/cadastro/salvar', (requisicao, resposta) => {
    console.log(requisicao.body)
    const nome = requisicao.body.nome
    const email = requisicao.body.email
    const senha = requisicao.body.senha

    console.log(`o e-mail do usuário é : ${email}`)
})

app.get('/cadastro',(requisicao, resposta) => {
    resposta.sendFile(`${caminhoBase}/cadastro.html`)
})

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