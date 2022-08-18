const { Router } = require('express')
const PessoaController = require('../controlles/PessoaController.js')

const router = Router()

router
.get('/pessoas', PessoaController.pegaTodasAsPessoas)
.get('/pessoas/ativas', PessoaController.pegaPessoasAtivas)
.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
.get('/pessoas/matricula/lotada', PessoaController.pegaTurmaLotada)
.get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas)
.get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.pegaMatriculasPorTurma)
.post('/pessoas', PessoaController.criarPessoa)
.put('/pessoas/:id', PessoaController.atualizarPessoa)
.delete('/pessoas/:id', PessoaController.apagarPessoa)
.get('/pessoas/:estudanteId/matricula/:matriculaId', 
PessoaController.pegaUmaMatricula)
.post('/pessoas/:estudanteId/matricula', 
PessoaController.criarMatricula)
.post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
.put('/pessoas/:estudanteId/matricula/:matriculaId', 
PessoaController.atualizarMatricula)
.delete('/pessoas/:estudanteId/matricula/:matriculaId', 
PessoaController.apagarMatricula)
.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', 
PessoaController.restauraMatricula)
.post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa)


module.exports = router