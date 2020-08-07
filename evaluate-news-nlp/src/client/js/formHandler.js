import { checkForURL } from "./URLChecker"

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    let value = jsClient.checkForURL(formText)

    console.log(value)

    if (value == false){
      alert('Please Enter Valid URL')
    } else {

    console.log("::: Form Submitted :::")

// post route
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
        document.getElementById('results').innerHTML = JSON.stringify(newData.message);
      }catch(error) {
      console.log("error", error);
      }
  }

  postData('http://localhost:8081/post', {link: formText})

  }
}

export { handleSubmit }