// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

  // Functions

//GET Request Route.... 
const getData = async ( url = '')=>{
    
  const response = await fetch(url, {
  method: 'GET', 
  credentials: 'same-origin',
  headers: {
      'Content-Type': 'application/json',
  },
 // Body data type must match "Content-Type" header        
  body: JSON.stringify(), 
});

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  }catch(error) {
  console.log("error", error);
  }
}

//POST Request Route....
const postData = async ( url = '', data = {})=>{
  console.log(data);
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
   // Body data type must match "Content-Type" header        
    body: JSON.stringify(data), 
  });

    try {
      const newData = await response.json();
      console.log(newData);
      return newData;
    }catch(error) {
    console.log("error", error);
    }
}

// FUNCTION: Fetching the Weather infromation from the Weather API
const getWeather = async (URL)=>{

  const res = await fetch(URL)
  try {

    const data = await res.json();
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

// Updating the recieved data into the website
const updateUI = async () => {
  const request = await fetch('/website');
  try{
    const allData = await request.json();
    document.getElementById('date').innerHTML = allData.date;
    document.getElementById('temp').innerHTML = allData.tempreture;
    document.getElementById('content').innerHTML = allData.userResponse;

    //document.querySelector('.holder headline').innerHTML = 'Hi THERE!!!!'
  }catch(error){
    console.log("error", error);
  }
}
// Calling functions and using the input from user in the functions 
function performAction(e){

  const userFeelings = document.getElementById('feelings').value;//taking the value of textarea from the user input
  const userCode =  document.getElementById('zip').value; //taking the value of zip code from the user input
  const countryCode = document.getElementById('Country').value; //taking the value of country code from the user input
  
  const URL = `http://api.openweathermap.org/data/2.5/weather?zip=${userCode},${countryCode}&units=metric&appid=217241626b438e380d984282ad08c512`;

  getWeather(URL)

  .then((data)=> {
    console.log(data)
    postData('/post', {tempreture: data.main.temp, date: newDate, userResponse: userFeelings})
  })
  .then(()=> {updateUI()})
}

//Calling OpenWeatherApi using Zip code recieved from the user when submit
document.getElementById('generate').addEventListener('click', performAction);