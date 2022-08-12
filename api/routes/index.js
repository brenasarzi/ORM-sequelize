// é o ponto de entrada que gerencia os arquivos de rotas, importa os métodos de cada arquivo
const bodyParser = require("body-parser")
const pessoas = require('./pessoasRoutes.js')
const niveis = require('./niveisRoute.js')
const turmas = require('./turmasRoutes.js')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(pessoas)
    app.use(niveis)
    app.use(turmas)
}
