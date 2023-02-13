import React from 'react'
import { CiLogin, CiLogout } from 'react-icons/ci'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link to='/'>
          <p className="btn btn-ghost normal-case text-xl">RK TODO</p>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5">
          <Link to="/">
            <li> Home </li>
          </Link>

          <Link to="/trash">
            <li> Trash </li>
          </Link>

        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/user/login">
            <button className="btn btn-sm btn-ghost bg-[#50C878] hover:bg-[#177245] text-white btn-circle mx-5">
              <CiLogin size={25}/>
          </button>
          </Link>

          <Link to="/user/logout">
          <label className="btn btn-sm btn-ghost  bg-[#FE6F5E] hover:bg-[#a51313] text-white btn-circle mx-5">
            <CiLogout  size="25px"/>
          </label>
        </Link>
      </div>
    </div>
  )
}

export default Header









//       <Link className="btn btn-ghost normal-case text-xl" to="/" >RK TODO</Link>      
// <Link to="/user/login">
// {/* <button className="btn btn-ghost bg-[#50C878] hover:bg-[#177245] text-white btn-circle mx-5">
//   <CiLogin size={25}/>
// </button>
// </Link>

// <Link to="/user/logout">
// <label className="btn btn-ghost  bg-[#FE6F5E] hover:bg-[#a51313] text-white btn-circle mx-5">
// <CiLogout  size="25px"/>
// </label>
// </Link>  */}