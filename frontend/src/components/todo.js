import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BaseUrl = "http://localhost:8000/todo_api/"

function TodoApp() {
    const [updateTodo, setupdateTodo] = useState('');
    const [editTodoId, setEditTodoId] = useState(null);
    const [showConfirm, setShowConfirm] = useState(false);
    const [deleteId, setDeleteId] = useState(null);


    
    const handleEditTodo = (id, item) => {
        setupdateTodo(item)
        setEditTodoId(id);
        };
    
    const handleUpdateTodo = async (id, item) => {
    try {
        const updatedTodo = todos.map(todo => (todo.id === id ? { ...todo, item } : todo));
        console.log(updatedTodo)
        await axios.put(`${BaseUrl}update/${id}/`, {item: item});
        setTodos(updatedTodo);
        setEditTodoId(null);
    } catch (err) {
        console.error(err);
    }
    };

    const handleDeleteTodo = async (id) => {
        try {
            await axios.delete(`${BaseUrl}delete/${id}/`);
            setTodos(todos.filter(todo => todo.id !== id));
        } catch (err) {
            console.error(err);
        }
    };
    const handleConfirmDelete = (id) => {
        setDeleteId(id);
        setShowConfirm(true);
    };
    
    const handleCancelDelete = () => {
        setShowConfirm(false);
        setDeleteId(null);
    };
    
    const handleConfirm = () => {
        handleDeleteTodo(deleteId);
        setShowConfirm(false);
        setDeleteId(null);
    };

    return (
        <div>
            <ul>
                {filteredTodos.map(todo => (
                <li key={todo.id} onDoubleClick={() => handleEditTodo(todo.id, todo.item)} >
                    <input 
                        type="checkbox" 
                        checked={todo.active} 
                        onChange={() => handleTodoCompletion(todo.id, !todo.active)} 
                        
                    />{editTodoId === todo.id
                        ? <input type="text" value={updateTodo} onChange={e => setupdateTodo(e.target.value)} onBlur={() => handleUpdateTodo(todo.id, updateTodo)} />
                        : todo.item}
                        <button onClick={() => handleConfirmDelete(todo.id)}>Delete</button>
                </li>
                ))}
            </ul>
        
            <div>
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('active')}>Active</button>
                <button onClick={() => setFilter('inactive')}>Inactive</button>
            </div>
            {showConfirm && (
                <div>
                    <p>Are you sure you want to delete this Todo?</p>
                    <button onClick={handleConfirm}>Yes</button>
                    <button onClick={handleCancelDelete}>No</button>
                </div>
            )}
        </div>
    );
}

export default TodoApp;


