import React from 'react'
import CompleteTodo from '../components/CompleteTodo'
import DeleteTodo from './DeleteTodo'
import UpdateTodo from './UpdateTodo'

function ListTodo({ setTodos, filteredTodos, todos}) {
    const handleEditTodo = (id, item) => {
        // setupdateTodo(item)
        console.log(id, item)
    }
  return (
    <div className=''>
        <ul className='p-1 space-y-2 '>
            {filteredTodos.map( todo => (
                <li className='flex px-3 py-2 my-2 bg-base-100 rounded-lg justify-between' 
                    key={todo.id} onDoubleClick={handleEditTodo(todo.id, todo.item)}>

                    <CompleteTodo todo={todo} setTodos={setTodos} todos={todos}/>

                    <DeleteTodo id={todo.id} setTodos={setTodos} todos={todos}/>
                </li>
            ))}
        </ul>

    </div>
  )
}

export default ListTodo