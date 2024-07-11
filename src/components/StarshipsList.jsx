import StartshipCard from "./StarshipCard";
import "./StarshipList.css"

const StarshipsList = (props) => {
    console.log("list", props);

    return(
<section>
    <h2 className="heading">StarShip List({props.starships.length} results)</h2>
    <div className="starship-list">
        {
            props.starships.map((starship, index) => {
             return   <StartshipCard key={index} starship={starship}/>
            }
        )}
    </div>
    {/* <ul>
        {
           props.starships.map((starships, index) => [
            <li key = {index}>
                {starships.name}
            </li>
           ]) 
        }
    </ul> */}
</section>
    )
};

export default StarshipsList;