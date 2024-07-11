import { useState } from "react";
import "./StarshipList.css"

const StarshipSearch = (props) => {

    const [ starShipSearch, setStarshipSearch ] = useState([]);

const handleSubmit = (event) => {
    event.preventDefault();
    props.fetchData(starShipSearch);
    setStarshipSearch("");
}

    return(
 <section className="search">
    {/* <h2> Serach </h2> */}
    <form onSubmit={handleSubmit}>
        <label htmlFor="starShip" className="search-label">Enter a starShip Name:</label>
        <input type="text"
        id="starShip"
        value={starShipSearch}
        onChange={(event)=>setStarshipSearch(event.target.value)} 
        />
        <button type="submit">Search</button>
    </form>
 </section>
    )
};

export default StarshipSearch;