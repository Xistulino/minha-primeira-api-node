const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response){
    response.json({
        nome: 'Rosicleide Xistulino',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e instrutura'
    })
}

function mostraPorta() {
    console.log("Servidor Criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen (porta, mostraPorta)
