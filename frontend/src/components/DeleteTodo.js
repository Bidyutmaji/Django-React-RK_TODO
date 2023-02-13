import React, { useState } from 'react'
import axios from 'axios';
import { CiBookmarkMinus } from 'react-icons/ci'

import { BASE_URL } from '../config'

function DeleteTodo({id, setTodos, todos}) {
    const [showConfirm, setShowConfirm] = useState(false);
    const [deleteId, setDeleteId] = useState(null);


    const handleDeleteTodo = async (id) => {
        try {
            await axios.delete(`${BASE_URL}delete/${id}/`);
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
    <div className='place-items-end'>
        <label htmlFor="my-modal">
            <div className='btn text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80  btn-circle mr-[10px]'>
                <CiBookmarkMinus size="30" className=' text-white rounded cursor-pointer  p-[3px]'
            onClick={() => handleConfirmDelete(id)}/>
            </div>
    </label>
    { showConfirm && (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box w-[30%]">
                <h3 className="font-bold text-lg text-center">Delete Todo</h3>
                <p className="py-4 text-center">Are you sure to trashed the todo into trash!</p>
                <div className="modal-action btn-group">
                    <label htmlFor="my-modal" className='btn btn-outline btn-error btn-sm' onClick={handleConfirm}>Yes</label>
                    <label  htmlFor="my-modal" className='btn btn-outline btn-success btn-sm' onClick={handleCancelDelete}>No</label>
                </div>
            </div>
            </div>
        </div>
        )}
        {/* // <div>
        //     <p>Are you sure you want to delete this Todo?</p>
        //     <button onClick={handleConfirm}>Yes</button>
        //     <button onClick={handleCancelDelete}>No</button>
        // </div> */}
    </div>
  )
}

export default DeleteTodo