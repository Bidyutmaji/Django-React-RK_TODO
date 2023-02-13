import React,{ useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios  from 'axios'

import { AUTH_URL } from '../config'
function LogoutUser() {
    const [unable, setUnable] = useState(false)
    const redirect = useNavigate()
    
    useEffect(() => {
        try  {
            axios.get(`${AUTH_URL}logout/`)
            .then(
                localStorage.clear(),
                redirect('/user/login'),
                console.log("HARE KRSNA")
            )
            .catch( err => {
                console.error(err)
                setUnable(true)
            })
        }
        catch (error) {
            console.error(error)
            setUnable(true)
        }
    }, [])
    
    return (
        <>
        {unable &&
        <div> Hare Krsna</div>
        }
        </>
    )
}

export default LogoutUser