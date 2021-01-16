import React, {useState , useEffect} from 'react';
import axios from 'axios';


function Planets (props) {
    const [result, setResult] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${props.id}/`)
        .then(response => {setResult(response.data)})
        .catch((event) => {setError("These aren't the droids you're looking for.")})
    }, [props])
    
        return (
            <div>
                <h2>{result.name}</h2>
                <p>Rotation Period: {result.rotation_period}</p>
                <p>Orbital Period: {result.orbital_period}</p>
                <p>Diameter: {result.diameter}</p>
                <p>Climate: {result.climate}</p>
                <p>Gravity:{result.gravity}</p>
                <p>Terrain: {result.terrain}</p>
                <p>Surface Water: {result.surface_water}</p>
                <p>Population: {result.population}</p>
            </div>
        )
}

export default Planets;