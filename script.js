const http = require('http')
const { soma } = require('./teste')

const PORT = 8000


const server = http.createServer((req, res) => {
    let valor = req.url.replace('/', '').replace('?', '').split('&')
    let parametros = {}
    let resultado = soma(5, 10)
    
    
    for (item in valor) {
        let chaveValor = valor[item].split('=')
        parametros[chaveValor[0]] = Number(chaveValor[1])
    }

   
    res.end(`O valor final é ${resultado}`) 
})


server.listen(PORT, () => {
    console.log(`O servidor foi inicializado na porta ${PORT}`)
})
