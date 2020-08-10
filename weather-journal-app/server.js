// Setup empty JS object to act as endpoint for all routes
projectData = {
  date:'0/0/0000',
  tempreture: 0,
  userResponse: ''
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
app.use(express.static('website'));


// Setup Server
const port = 3000; // declare port number
const server = app.listen(port, ()=>{console.log(`The server is running on localhost: ${port}`)})

// Respond with JS object when a GET request is made to the homepage
app.get('/website', function (req, res) {
  res.send(projectData)
  console.log(projectData)
  })

// POST method route
app.post('/post', function (req, res) {
  console.log(req.body);
  
  newEntry = {
    tempreture: req.body.temp,
    date: req.body.newDate,
    userResponse: req.body.userFeelings
  }
  
  
  Object.assign(projectData,req.body);
  weatherData.push(projectData);
  //res.send('POST Recieved');
  console.log(weatherData);
})