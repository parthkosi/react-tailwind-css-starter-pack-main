import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <nav className="px-8 py-4 bg-red-400 ">
        <ul>
            <li>
                <Link to ='/'>Login Form</Link>
            </li>
            <li>
                <Link to ='/GroupPage'>Group Page</Link>
            </li>
        </ul>
    </nav>
  );
};
export default Navbar;