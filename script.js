const http = require('http')
const { soma } = require('./teste')

const PORT = 8000


const server = http.createServer((req, res) => {
    const urlCapturada = url.parse(req.url, true)
    const {query} = urlCapturada
    let resultado = soma(Number(query.a), Number(query.b))
    res.end(`O valor final é ${resultado}`) 
})


server.listen(PORT, () => {
    console.log(`O servidor foi inicializado na porta ${PORT}`)
})
