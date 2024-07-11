
const BASE_URL = `https://swapi.dev/api/starships/`;

const show = async(starships) => {
   try {
    // const queryString = `?search=${starships}`
    const res = await fetch(BASE_URL + (starships ? `?search=${starships}`: "") );
    const data = await res.json();
   //  console.log("Data", data);
    return data.results;
   } catch (error) {
    console.log("error", error)
   } 
}

// show("Falcon");

show()

export {show}