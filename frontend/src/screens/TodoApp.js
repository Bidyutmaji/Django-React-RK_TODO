import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { isExpired }  from "react-jwt";

import AddTodo from '../components/AddTodo';
import FilterTodo from '../components/FilterTodo';
import { useNavigate } from 'react-router-dom'

import { BASE_URL, AUTH_URL } from '../config'

function TodoApp() {
    const [todos, setTodos] = useState([]);
    console.log(isExpired(localStorage.access));
    console.log(isExpired(localStorage.refresh));
    const redirect = useNavigate()

    useEffect( () => {
        if (localStorage.getItem('access') !== null ){
            if (isExpired(localStorage.access)) {
                console.log("JPS");
                axios.post(AUTH_URL + 'token-refresh/', {
                    refresh: localStorage.refresh
                })
                .then( (response) => {
                    localStorage.setItem('access', response.data.access)
                    console.log(response.data.access === localStorage.access)
                    axios.get(BASE_URL, { headers: { Authorization: `Bearer ${localStorage.access}` } })
                    .then(res => setTodos(res.data))
                    .catch(err => console.error(err));
                    console.log("axios call if");

                })
                .catch( (error) => {console.error(error)})
            }
            else {
                axios.get(BASE_URL, { headers: { Authorization: `Bearer ${localStorage.access}` } })
                .then(res => setTodos(res.data))
                .catch(err => console.error(err));
                console.log("axios call else");
            }
        }
        else {
            redirect('/user/login')
        }
    }, []);

    return (
    <div className='container mx-auto p-[25px] w-[60%] bg-base-200 rounded-[25px] h-auto mt-[10px]'>
        <AddTodo setTodos={setTodos} todos={todos}/>
        <FilterTodo setTodos={setTodos} todos={todos}/>
    </div>
    )
}

export default TodoApp