import { useState } from 'react';

function TodoList (){
    const [inputVal, setInputVal] = useState('');
    const [list, setList] = useState([]);

    console.log(list);

    function handleChange(event){
        setInputVal(event.target.value);
    }

    function handleSubmit(event){
        // stopping the native HTML form submission
        // would make a GET request to the same URL
        event.preventDefault();

        //add item to list
        const clonedList = list.slice();
        
        // adding to clone list while making it an object to store all the info
        clonedList.push({
            text: inputVal,
            completed: false
        });

        setList(clonedList);
        setInputVal('')
    }

    function handleDelete(idx){
        // callback returns whether index does NOT equal index
        // filter returns a NEW array
        // item isn't going to be used so replaced with _
        const filtered = list.filter((_, index) => idx !== index);

        setList(filtered);
    }

    function toggleIt(index){
        const todo = list[index];

        // reassigning to the negated value
        todo.completed = !todo.completed;

        setList([...list]);
    }

    return (
        <div>
            {inputVal}
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    onChange={handleChange}
                    // onChange={event => setInputValue(event.target.value)}
                    // anonymous function version ^ of the handleChange
                    value={inputVal}
                />
                <button>Add</button>
            </form>    

            <div>
                {list.map((item, index) => (
                    <p key={index} >
                        <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>{item.text} </span>
                        <input type="checkbox" onChange={() => toggleIt(index)}/>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </p>
                ))}
            </div>

        </div>

    )
}

export default TodoList;