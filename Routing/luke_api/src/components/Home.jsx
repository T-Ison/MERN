import React, {useState} from 'react';
import {navigate} from '@reach/router';

function Home () {
    const [userInput, setUserInput] = useState("people");
    const [id, setId] = useState(1);

    const submitHandle = (event) => {
        navigate(`/${userInput}/${id}`);
    }

    return (
        <div>
            <form onSubmit = {submitHandle}>
                <label >Search for: </label>
                <select value = {userInput} onChange = {(event) => setUserInput(event.target.value)}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="starships">Starships</option>
                </select>

                <label >ID: </label>
                <input type="number" value= {id} onChange = {(event) => setId(+event.target.value)} />

                <button>Search You Must</button>
            </form>
        </div>

        
    );
}
export default Home;