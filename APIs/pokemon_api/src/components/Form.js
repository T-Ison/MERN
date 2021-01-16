import { useState } from 'react';

import axios from 'axios';

function Form() {
    const [pokemon, setPokemon] = useState([]);

    function handleSubmit(event){
        event.preventDefault();
        // fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        // .then(response => response.json())
        // .then(response => {
        //     setPokemon(response.results)
        //     console.log(response)
        // })
        // .catch(err=>console.log(err))

        // ^^^ was without axios ^^^

        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response=>setPokemon(response.data.results))
        // .then(response=> console.log(response))
        // utilize this ^ to find what response data to loop through

    }
    return (
        <div>
            <h2>Gotta Catch Them All!</h2>
            <hr/>
            <form onSubmit={handleSubmit}>
                <button>Fetch Pokemon</button>
            </form>

            <div>
                {pokemon.map((poke, index)=>{
                    return (
                    <div key={index}>
                        <ul>
                            <li>
                                <span>

                                    {poke.name}
                                </span>

                            </li>

                        </ul>
                    </div>)
                })}
            </div>
        </div>
    )
}
export default Form;