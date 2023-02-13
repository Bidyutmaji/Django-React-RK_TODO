import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { BASE_URL } from '../config'
import RestoreTodo from '../components/RestoreTodo';

function TrashTodo() {
    const [trashTodo, setTrashTodo] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}trash/`)
        .then(response => setTrashTodo(response.data))
        .catch(error => console.error(error))
    }, []);
    
console.log(trashTodo)

    return (
        <div className='container mx-auto p-[25px] w-[60%] bg-base-200 rounded-[25px] h-auto'>
            <ul className='p-1 space-y-2 '>
                {trashTodo.map( todo =>(
                    <li className='flex px-3 py-2 my-2 bg-base-100 rounded-lg justify-between'
                        key={todo.id}>
                        {todo.item}
                    
                        <RestoreTodo id={todo.id} setTrashTodo={setTrashTodo} trashTodo={trashTodo}/>
                    </li>
                    ))}
                
            </ul>
        </div>
    )
}

export default TrashTodo