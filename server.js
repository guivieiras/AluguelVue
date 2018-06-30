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

app.get('/teste', (req, res) => {
  res.send({express:'Hello From Express'});
});

app.use(bodyParser.urlencoded({ extended: true }))


app.get('/api/mensagem', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

