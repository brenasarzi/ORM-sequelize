const express = require ('express')
const bodyParser = require ('body-parser')
const app = express()

app.use(bodyParser.json())

const port = 8080

app.get('/teste', (req, res)=> res
    .status(200)
    .send({mensagem: 'Boas vindas á API'
}))

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

module.exports = app


