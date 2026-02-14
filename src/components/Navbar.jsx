import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='navbar__list'>
        <li className='navbar__item'>
          <NavLink to="/photos">Photos</NavLink>
        </li>
        <li className='navbar__item'>
          <NavLink to="/albums">Albums</NavLink>
        </li>
        <li className='navbar__item'>
          <NavLink to="/Users">Users</NavLink>
        </li>
        <li className='navbar__item'>
          <NavLink to="/">Posts</NavLink>
        </li>
        <li className='navbar__item'>
          <NavLink to="/todos">Todos</NavLink>
        </li>
        <li className='navbar__item'>
          <NavLink to="/comments">Comments</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar