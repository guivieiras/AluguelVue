const express = require('express');

const bodyParser = require('body-parser')

const app = express();
const port = 5000;

const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://user:password01@ds123151.mlab.com:23151/programacao_web', (err, client) => {
  if (err) return console.log(err)
  db = client.db('programacao_web') // whatever your database name is

  app.listen(port, () => console.log(`Listening on port ${port}`));

});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/imoveis', (req, res) => {
  db.collection('imoveis').find().toArray(function (err, results) {

    if (err) return console.log(err)
    res.json(results);
  })
});

app.post('/api/imoveis', (req, res) => {
  db.collection('imoveis').save(req.body, (err, result) => {
    console.log(result);
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
});

app.get('/api/imoveis/:id', (req, res) => {
  res.send(casas[req.params['id']]);
});

app.get('/api/mensagem', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

