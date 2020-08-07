var path = require('path')
var bodyParser = require('body-parser')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var cors = require('cors'); var lodash = require('lodash'); // Required 
var aylien = require("aylien_textapi");
const dotenv = require('dotenv');
dotenv.config();

// set aylien API credentias
  var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });

const app = express()

app.use(express.static('dist'))

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))

})
 
app.post('/post', function (req, res) {

  textapi.sentiment({
    url: req.body.link,
    mode: 'document'
  }, function(error, response) {
    if (error === null) {
      console.log(response);
      res.send({message: response})
    }
  })
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log('Example app listening on port 8081!')
})
