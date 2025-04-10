const express = require('express');

const app = express();

const port = 3000;

app.get('/'), (request,response) => {
  response.send ('Digite seu nome')
};

app.get('/trabalho', (request,response) => {
    response.send ('Pedro Botoso ')

});

app.listen(port, () => {
    console.log (`Servidor rodando aqui`)
})