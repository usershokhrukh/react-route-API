import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='navbar__list'>
        <li className='navbar__item'>
          <NavLink className={"navbar__link"} to="/">Posts</NavLink>
        </li>
        <li className='navbar__item'>
          <NavLink className={"navbar__link"}  to="/photos">Photos</NavLink>
        </li>
        <li className='navbar__item'>
          <NavLink className={"navbar__link"} to="/albums">Albums</NavLink>
        </li>
        <li className='navbar__item'>
          <NavLink className={"navbar__link"} to="/users">Users</NavLink>
        </li>
        <li className='navbar__item'>
          <NavLink className={"navbar__link"} to="/todos">Todos</NavLink>
        </li>
        <li className='navbar__item'>
          <NavLink className={"navbar__link"} to="/comments">Comments</NavLink>
        </li>
      </ul>
      <div className='navbar__right'>
        <span>
          <svg className='navbar__loader none' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C16.9706 3 21 7.02944 21 12H19C19 8.13401 15.866 5 12 5V3Z"></path></svg>
        </span>
        {/* <button className='navbar__button'>reload</button>
        <button className='navbar__button'>get again</button> */}
      </div>
    </div>
  )
}

export default Navbar