const express = require('express');

const bodyParser = require('body-parser')

const app = express();
const port = 5000;

const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://user:password01@ds123151.mlab.com:23151/programacao_web', (err, client) => {
  if (err) return console.log(err)
  db = client.db('star-wars-quotes') // whatever your database name is

  app.listen(port, () => console.log(`Listening on port ${port}`));

});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var casas = [
  { id: 1, preco: 100, cor: 'Bege', quartos: 2, local: 'São José', descricao: 'Bela casa de frente para o mar.', urlImagem: 'https://www.decorfacil.com/wp-content/uploads/2015/11/20161114fachada-casa-simples-pequena-98.jpg' },
  { id: 2, preco: 100, cor: 'Bege', quartos: 2, local: 'São José', descricao: 'Bela casa de frente para o mar.', urlImagem: 'https://www.decorfacil.com/wp-content/uploads/2015/11/20161114fachada-casa-simples-pequena-98.jpg' },
  { id: 3, preco: 100, cor: 'Bege', quartos: 2, local: 'São José', descricao: 'Bela casa de frente para o mar.', urlImagem: 'https://www.decorfacil.com/wp-content/uploads/2015/11/20161114fachada-casa-simples-pequena-98.jpg' },
  { id: 4, preco: 100, cor: 'Bege', quartos: 2, local: 'São José', descricao: 'Bela casa de frente para o mar.', urlImagem: 'https://www.decorfacil.com/wp-content/uploads/2015/11/20161114fachada-casa-simples-pequena-98.jpg' },
  { id: 5, preco: 100, cor: 'Bege', quartos: 2, local: 'São José', descricao: 'Bela casa de frente para o mar.', urlImagem: 'https://www.decorfacil.com/wp-content/uploads/2015/11/20161114fachada-casa-simples-pequena-98.jpg' },
  { id: 6, preco: 100, cor: 'Bege', quartos: 2, local: 'São José', descricao: 'Bela casa de frente para o mar.', urlImagem: 'https://www.decorfacil.com/wp-content/uploads/2015/11/20161114fachada-casa-simples-pequena-98.jpg' },
  { id: 7, preco: 100, cor: 'Bege', quartos: 2, local: 'São José', descricao: 'Bela casa de frente para o mar.', urlImagem: 'https://www.decorfacil.com/wp-content/uploads/2015/11/20161114fachada-casa-simples-pequena-98.jpg' },
  { id: 8, preco: 100, cor: 'Bege', quartos: 2, local: 'São José', descricao: 'Bela casa de frente para o mar.', urlImagem: 'https://www.decorfacil.com/wp-content/uploads/2015/11/20161114fachada-casa-simples-pequena-98.jpg' },
  { id: 9, preco: 100, cor: 'Bege', quartos: 2, local: 'São José', descricao: 'Bela casa de frente para o mar.', urlImagem: 'https://www.decorfacil.com/wp-content/uploads/2015/11/20161114fachada-casa-simples-pequena-98.jpg' },
  { id: 0, preco: 100, cor: 'Bege', quartos: 2, local: 'São José', descricao: 'Bela casa de frente para o mar.', urlImagem: 'https://www.decorfacil.com/wp-content/uploads/2015/11/20161114fachada-casa-simples-pequena-98.jpg' }
];

app.use(bodyParser.urlencoded({ extended: true }))


app.get('/api/casas', (req, res) => {
  //Requisitar do mongoDB as casas
  res.json(casas);
});

app.get('/api/casas/:id', (req, res) => {
  res.send(casas[req.params['id']]);
});

app.get('/api/mensagem', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

