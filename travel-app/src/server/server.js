// Setup empty JS object to act as endpoint for all routes
let projectData = {
  latitude:'',
  longitude: 0,
  country: ''
};

const weatherData = [];
// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
const { request } = require('express');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));


// Setup Server
const port = 3000; // declare port number
const server = app.listen(port, ()=>{console.log(`The server is running on localhost: ${port}`)})

// #######################
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
  })

// Respond with JS object when a GET request is made to the homepage
app.get('/getInfo', function (req, res) {
  res.send(projectData)
  console.log(projectData)
  })

// POST method route
app.post('/post', function (req, res) {
  console.log(req.body);
  
  newEntry = {
    latitude: req.body.geonames[0].lat,
    longitude: req.body.geonames[0].lng,
    country: req.body.geonames[0].countryCode,
    countryName: req.body.geonames[0].countryName
  } // req.body.geonames[0]
  
  
  Object.assign(projectData,newEntry);
  res.send(newEntry);
  console.log(projectData);
})

// POST method route
app.post('/weather', function (req, res) {
  console.log(req.body);
  
  newEntry = {
    validDate: req.body.data[0].valid_date,
    low_temp: req.body.data[0].low_temp,
    max_temp: req.body.data[0].max_temp,
    weather_description: req.body.data[0].weather.description
  }
  
  console.log(req.body.data[0].valid_date,)

  Object.assign(projectData,newEntry);
  //weatherData.push(projectData);
  //res.send('POST Recieved');
  console.log(projectData);
})

module.exports = server;