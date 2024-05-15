// src/components/Nav.js
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div className="bg-red-300 w-full h-10 ">
      <NavLink to="/cart"> cart </NavLink>
    </div>
  );
}

export default Nav;
