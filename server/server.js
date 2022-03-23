const express = require('express');
const db = require('./db.js');
const getData = require('./Helper.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});

app.get('/api/notes', (req, res) => {
  //Write your route here!
  //
  getData.getAllFromDB((err, data)=>{
    if (err) {
      res.status(404).send('error occured when retrieving information');
    } else {
      res.send(data);
    }
  });
});