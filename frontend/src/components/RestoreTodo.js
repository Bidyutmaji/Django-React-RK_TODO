import React, { useState } from 'react'
import axios from 'axios'

import { CiBookmarkPlus } from 'react-icons/ci'

import { BASE_URL } from '../config'

function RestoreTodo( {id, setTrashTodo, trashTodo } ) {
    const handleRestore = async (id) => {
        await axios.put(`${BASE_URL}restore/${id}/`)
        setTrashTodo(trashTodo.filter(todo => todo.id !== id))
        console.log(id)

    };

  return (
    <div className='btn btn-ghost bg-green-500 hover:bg-green-600  mr-[10px]'>
        <CiBookmarkPlus onClick={() => handleRestore(id)} size="25px" className=' text-white rounded cursor-pointer'/>
    </div>
  )
}

export default RestoreTodo