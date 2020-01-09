const port = 3000;
const express = require('express');
const app = express();

const bancoDeDados = require('./bancoDeDados');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos());
});

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id));
});

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto(req.body.produto);
    res.send(produto);
});

app.listen(port, () => console.log(`running on port ${port}`));