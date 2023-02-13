import React, { useState } from 'react'
import ListTodo from './ListTodo';

function FilterTodo({ setTodos, todos }) {
    const [filter, setFilter] = useState('all');

    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') return todo.active;
        if (filter === 'inactive') return !todo.active;
        return true;
        });

  return (
    <div className=''>
        <div className='text-center space-x-4 my-3'>
            <button className={filter === 'all' 
                  ? 'btn btn-outline btn-primary btn-active rounded-l-full'
                  :  'btn btn-outline btn-primary rounded-l-full'} 
            onClick={() => setFilter('all')}>All</button>

            <button className={filter === 'active' 
                  ? 'btn btn-outline btn-accent btn-active rounded-none'
                  :  'btn btn-outline btn-accent rounded-none'}  
            onClick={() => setFilter('active')}>Active</button>
            
            <button className={filter === 'inactive' 
                  ? 'btn btn-outline btn-secondary btn-active rounded-r-full'
                  :  'btn btn-outline btn-secondary rounded-r-full'}  
            onClick={() => setFilter('inactive')}>Inactive</button>
        </div>

        <ListTodo setTodos={setTodos} filteredTodos={filteredTodos} todos={todos}/>
    </div>
  )
}

export default FilterTodo