import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios  from 'axios'
import { Link } from 'react-router-dom';

import { AUTH_URL } from '../config'
function LoginUser() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const redirect = useNavigate()
    const handleLogin = async (e) => {
        e.preventDefault()
        await axios.post(`${AUTH_URL}login/`, {
        email,
        password
        })
        .then( response => {
            localStorage.clear()
            localStorage.setItem('refresh', response.data.refresh)
            localStorage.setItem('access',  response.data.access)
            localStorage.setItem('user',  JSON.stringify(response.data))
            localStorage.setItem('email',  response.data.email)
            redirect('/')
          })
          .catch(error => console.error(error))
    }

  return (
    <div className='container mx-auto py-[25px]  px-[50px] w-[50%] bg-base-200 rounded-[25px] h-auto text-center '>
        <h2 className='text-3xl font-bold'>
          LOGIN
        </h2>
        <form onSubmit={handleLogin} className="form-control">
          <label className="label label-text ">
            Email:
          </label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)}
            placeholder="test@example.com"
            className="input input-bordered input-info mb-4 rounded-full"
          />
          
          <label className="label label-text">
            Password:
          </label>
          <input type="password" autoComplete='on' value={password} onChange={e => setPassword(e.target.value)}
            placeholder="Type password here"
            className="input input-bordered input-info mb-5 rounded-full"
          />

            <input type="submit"  value="login"
              className='btn btn-ghost bg-[#9966CC] hover:bg-[#632b9b] text-white rounded-full my-5'
            />
      </form>
      <div className='divider'>OR</div>
      <p>Don't have an accout?
        <Link to='/user/signup'>
        <span className='link link-accent px-1'>
          Register
        </span>
        </Link>
      </p>
    </div>

  )
}

export default LoginUser