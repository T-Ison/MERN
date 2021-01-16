import React, {useState , useEffect} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';


function People (props) {
    const [result, setResult] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${props.id}/`)
        .then(response => {setResult(response.data)})
        // console log response to find out what response is needed
        .catch((event) => {navigate(`/error`)})
    }, [props])

        return (
            <div>
                <h2>{result.name}</h2>
                <p>Height: {result.height}</p>
                <p>Mass: {result.mass}</p>
                <p>Hair Color: {result.hair_color}</p>
                <p>Skin Color: {result.skin_color}</p>
                <p>Eye Color:{result.eye_color}</p>
                <p>Birth Year: {result.birth_year}</p>
                <p>Home World: {result.homeworld} </p>
                <Link to = "{result.homeworld}"> {result.homeworld}</Link>
            </div>
        )
}

export default People;