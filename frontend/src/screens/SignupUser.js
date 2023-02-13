import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios  from 'axios'
import { Link } from 'react-router-dom';

import { AUTH_URL } from '../config'

function SignupUser() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const redirect = useNavigate()

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`${AUTH_URL}signup/`,
    {
      first_name: firstName,
      last_name: lastName,
      phone: phone,
      email: email,
      password: password
    })
    .then( response => {
      // setUser(response.data)
      localStorage.clear()
      localStorage.setItem('user', JSON.stringify(response.data))
      localStorage.setItem('access',  response.data.access)
      redirect('/')
    })
    .catch(error => console.error(error))

  }

  return (
    <div className='container mx-auto py-[25px]  px-[50px] w-[52.2%] bg-base-200 rounded-[25px] h-auto text-center '>
        <h2 className='text-3xl font-bold'>
          SIGNUP
        </h2>
      <form onSubmit={handleFormSubmit} className="form-control">
        <div className='flex'>
          <div className='mr-3'>
            <label className="label label-text ">
              First Name:
            </label>
            <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)}
              className='input input-bordered h-[40px] input-info mb-2 rounded-l-full'
              placeholder='Bidyut'
            />
          </div>

          <div>
            <label className="label label-text ">
              Last Name:
            </label>
            <input type="text" value={lastName} onChange={e => setLastName(e.target.value)}
              className='input input-bordered h-[40px] input-info mb-2 rounded-r-full'
              placeholder='Maji'
            />
          </div>
        </div>

        <label className="label label-text ">
          Phone:
        </label>
        <input type="text" value={phone} onChange={e => setPhone(e.target.value)}
          className='input input-bordered h-[40px] input-info mb-2 rounded-full'
          placeholder='+91 6952563655'
        />

        <label className="label label-text ">
            Email:
        </label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)}
          className='input input-bordered h-[40px] input-info mb-2 rounded-full'
          placeholder='Email@example.com'
        />

        <label className="label label-text ">
            Password:
        </label>
        <input type="password" autoComplete='on' value={password} onChange={e => setPassword(e.target.value)}
          className='input input-bordered h-[40px] input-info mb-2 rounded-full'
          placeholder='Type password here'
          />

        <input type="submit"  value="Signup"
          className='btn btn-ghost bg-[#188663] hover:bg-[#064934] text-white rounded-full my-5'
        />
      </form>
      <div className='divider'>OR</div>
      <p>Already have an accout?
        <Link to='/user/login'>
        <span className='link link-accent px-1'>
        Login
        </span>
        </Link>
      </p>
    </div>
  )
}

export default SignupUser