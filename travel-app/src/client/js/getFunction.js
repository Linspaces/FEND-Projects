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

  export { getData }