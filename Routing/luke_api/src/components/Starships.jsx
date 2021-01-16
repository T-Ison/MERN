import React, {useState , useEffect} from 'react';
import axios from 'axios';


function Starships (props) {
    const [result, setResult] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${props.id}/`)
        .then(response => {setResult(response.data)})
        .catch((event) => {setError("These aren't the droids you're looking for.")})
    }, [props])
    
        return (
            <div>
                <h2>{result.name}</h2>
                <p>Model: {result.model}</p>
                <p>Manufacturer: {result.manufacturer}</p>
                <p>Cost in Credits: AurebeshSans-Serif credit.png{result.cost_in_credits}</p>
                <p>length: {result.length}</p>
                <p>max Atmosphering speed:{result.max_atmosphering_speed}</p>
                <p>Crew: {result.crew}</p>
                <p>Cargo Capacity: {result.cargo_capacity}</p>
                <p>Hyperdrive Rating: {result.hyperdrive_rating}</p>
                <p>Starship Class: {result.starship_class}</p>
            </div>
        );
}

export default Starships;