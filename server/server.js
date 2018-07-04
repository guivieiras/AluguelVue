const express = require('express');
const fs = require('fs');
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')
const multer = require('multer');
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname + '/public/api'))
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

const upload = multer({ storage: storage });

const app = express();
const port = 5000;
app.use(express.static(path.join(__dirname, 'public')));

MongoClient.connect('mongodb://user:password01@ds123151.mlab.com:23151/programacao_web', (err, client) => {
  if (err) return console.log(err)
  db = client.db('programacao_web');

  app.listen(port, () => console.log(`Listening on port ${port}`));
});

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/imoveis', (req, res) => {
  db.collection('imoveis').find().toArray(function (err, results) {

    if (err) return console.log(err)
    res.json(results);
  })
});
app.post('/api/imoveis/cadastrar', upload.any(), (req, res) => {
  console.log(req.body);
  req.body.fotos = [];
  for (var i = 0; i < req.files.length; i++){
    req.body.fotos.push('/api/' + req.files[i].filename);
  }
  db.collection('imoveis').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
});

// app.get('/api/imoveis/:id', (req, res) => {
//   var id = req.params['id']
//   var myquery = { _id: id };
//   dbo.collection("imoveis").deleteOne(myquery, function(err, obj) {
//     if (err) throw err;
//     console.log("1 document deleted");
//     db.close();
//   });


//   res.send(req.params[');
// });