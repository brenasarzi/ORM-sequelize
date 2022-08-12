// é o ponto de entrada da aplicação onde iniciamos o servidor e chamamos a biblioteca Express
// para gerenciar as rotas API
const express = require ('express')
const routes = require('./routes')

const app = express()
const port = 3000

routes(app)

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

module.exports = app


