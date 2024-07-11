import { useEffect, useState } from "react";
import StarshipsList from "./components/StarshipsList";
import StarshipSearch from "./components/StarshipSearch";
import * as starshipService from "./services/starshipService"
import "./App.css"

const App = () => {

  const [ starships, setstarships ] = useState([]);

const fetchData = async(starShip) => {
  try {
    const data = await starshipService.show(starShip);
    console.log("data of fetchData", data);
    setstarships(data)
  } catch (error) {
    console.log("error", error)
  }
}
//  fetchData()
// console.log("starships", starships)
useEffect(() => {
  fetchData()

// const fetchDefaultData = async() => {
//   try {
//     const data = await starshipService.show();
//     // console.log("data of usehook", data);
//     setstarships(data)
//   } catch (error) {
//     console.log("error", error)
//   }
// };
// fetchDefaultData()
}, [])

  return (
    <main>
<h1>StarShips!</h1>
<StarshipSearch fetchData={fetchData}></StarshipSearch>
<StarshipsList starships={starships}></StarshipsList>
    </main>
    
  );
}

export default App