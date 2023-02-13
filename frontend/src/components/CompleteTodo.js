import React from 'react'
import axios from 'axios'

import { BASE_URL } from '../config'

function CompleteTodo( { todo,todos, setTodos }) {

  const handleTodoCompletion = async (id, active) => {
    await axios.put(`${BASE_URL}update/${id}/`, { active: active });
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, active } : todo)));
    };


  return (
    <div className='flex'>
    <input 
      className='checkbox checkbox-success checkbox-sm mx-2'
        type="checkbox" 
        checked={todo.active} 
        onChange={() => handleTodoCompletion(todo.id, !todo.active)} 
        
    />
      <p className='mx-2 text-stone-300 text-xl'>{todo.item}</p>
    </div>
  )
}

export default CompleteTodo