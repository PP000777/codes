const express = require('express');
const { soma, subtracao, multiplicacao, divisao } = require('./teste');
const server = express();
const PORT = 8000;

server.get('/soma', (req, res) => {
    res.send('Aqui vai o resultado da minha soma');
}); 

server.get('/subtracao',(req, res) => {
    res.send('Aqui vai o resultado da minha subtracao');
});

server.get('/divisao',(req, res) => {
    res.send('Aqui vai o resultado da minha divisao');
});

server.get('/multiplicacao',(req, res) => {
    res.send('Aqui vai o resultado da minha multiplicacao');
});


server.listen(PORT, () => {
    console.log(`O servidor foi inicializado na porta ${PORT}`);
});