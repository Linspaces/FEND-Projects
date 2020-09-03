// FUNCTION: Fetching the Weather infromation from the Weather API
const getApi = async (URL)=>{

    const res = await fetch(URL)
    try {
  
      const data = await res.json();
      return data;
    }  catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
  }

  export { getApi }