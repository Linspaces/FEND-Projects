import { getApi } from "./apiFunction"
import { postData } from "./postFunction"
import { getData } from "./getFunction"

// Create a new date instance dynamically with JS
let d = new Date();
let newDate =  d.getFullYear() +'-'+ d.getMonth() +'-'+ d.getDate();
// Global Variables
let long = 0;
let latt = 0;
let imgSrc = '...'
let URL2 = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${latt}&lon=${long}&key=e43e5eafdeba4fe28856146576ddda80`;  

  // Update the content in the page
  const UI = async (departDate) => {
    const request = await fetch('http://localhost:3000/getInfo');
    try{
      const allData = await request.json();
      document.getElementById('Htemp').innerHTML = `High Temp: ${allData.max_temp}`; 
      document.getElementById('Ltemp').innerHTML = `Low Temp: ${allData.low_temp}`;
      document.getElementById('location').innerHTML = `Country Name: ${allData.countryName}`;
      document.getElementById('weatherD').innerHTML = `Weather: ${allData.weather_description}`;
  
    }catch(error){
      console.log("error", error);
    }
  }
  // Calculate the difference between two dates
  function daysDifference (date1 , date2){

    // To set two dates to two variables 
    let date11 = new Date(date1); 
    let date22 = new Date(date2);
    // To calculate the time difference of two dates 
    let Difference_In_Time = date22.getTime() - date11.getTime(); 
  
    // To calculate the number of days between the two dates 
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
  
    //To display the final no. of days (result) 
    document.getElementById('daysLeft').innerHTML = `Trip is ${Difference_In_Days} days`;
  } 

// Calling functions and using the input from user in the functions 
function performAction(e){

  const CityName =  document.getElementById('place_name').value; //taking the value of zip code from the user input
  const departDate = document.getElementById('start').value; //taking the value of country code from the user input
  const leaveDate = document.getElementById('end').value; //taking the value of country code from the user input

  let URL = `http://api.geonames.org/searchJSON?name_equals=${CityName}&maxRows=1&username=ksuhiyp`;

 // get the information about the place (using the getApi Function to get the information from the API)
  Client.getApi(URL)

  .then((data)=> {
    console.log(data)
   
    Client.postData('http://localhost:3000/post', data)
      .then((data1)=> {
        latt = data1.latitude;
        long = data1.longitude;
        console.log('data: '+latt+' type of data: '+typeof(latt)) // to be removed
        console.log('value of latt: '+latt+'value of long: '+long) // to be removed
        URL2 = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${latt}&lon=${long}&key=e43e5eafdeba4fe28856146576ddda80`;
      })
  })
  
// get the information about the place Weather (using the getApi Function to get the information from the API)
// making the function in the timeout so that it will wait for the previous api information (GeoNames API) before it runs
  setTimeout(function(){
     
    Client.getApi(URL2) 

    .then((data)=> {
      console.log(data)
      Client.postData('http://localhost:3000/weather', data)
    })
  
  }, 400);


  var API_KEY = '18102870-ee1e47d498220adcfcfa7009d';
  var URL3 = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(CityName);
  
  // pixabay API
  // get a picture related to the user input for the place name (using the getWeather Function to get the photo from the API)
  Client.getApi(URL3) 
  
  .then((data) => {
    console.log(data)
    
    if (parseInt(data.totalHits) > 0) {
        imgSrc = data.hits[0].webformatURL
        console.log(imgSrc) 
      }
    else 
        console.log('No hits')
  })
  // get the information stored in the server then update the information at the website 
  .then(setTimeout(function(){
    // get the information from the server by UI function
    UI(departDate)
    // Calculate the difference between the depart date and the leaving date then show it
    daysDifference(departDate, leaveDate)
    // change the img tag src to be the picture recieved from the pixabay API 
    let img2 = document.getElementById("pic2")
    img2.src = imgSrc
    img2.alt = CityName
  }, 410))
}
try {
//Calling OpenWeatherApi using Zip code recieved from the user when submit
document.getElementById('generate').addEventListener('click', performAction);
}
catch(err) {
 alert(err)
}
 
export { performAction }