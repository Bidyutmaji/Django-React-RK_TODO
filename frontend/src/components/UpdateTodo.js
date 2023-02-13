import React, { useState,} from 'react';
import axios from 'axios';

import { BASE_URL } from '../config'

function UpdateTodo({ todo, todos, setTodos }) {
    // const [updateTodo, setupdateTodo] = useState('');
    const [editTodoId, setEditTodoId] = useState(null);


    const handleEditTodo = (id, item) => {
        // setupdateTodo(item)
        console.log(id, item)
        // setEditTodoId(id);
        };
    
    // // const handleUpdateTodo = async (id, item) => {
    // try {
    //     // const updatedTodo = todos.map(todo => (todo.id === id ? { ...todo, item } : todo));
    //     // console.log(updatedTodo)
    //     await axios.put(`${BASE_URL}update/${id}/`, {item: item});
    //     // setTodos(updatedTodo);
    //     setEditTodoId(null);
    // } catch (err) {
    //     console.error(err);
    // }
    // };



  return (
    <span onDoubleClick={handleEditTodo(todo.id, todo.item)}>
    {/* {editTodoId === todo.id
        ? <input type="text" value={updateTodo} onChange={e => setupdateTodo(e.target.value)} onBlur={() => handleUpdateTodo(todo.id, updateTodo)} />
        :  */}
        {todo.item}
    </span>
  )
}

export default UpdateTodo