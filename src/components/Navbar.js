import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return(
    <nav className="navbar navbar-dark bg-dark navbar-expand-md">
      <Link to="/" className="navbar-brand">Excercise Tracker</Link>
      <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">Excercises</Link>
          </li>
          <li className="navbar-item" className="nav-link">
            <Link to="/create">Create Excercise Log</Link>
          </li>
          <li className="navbar-item" className="nav-link">
            <Link to="/user">Create User</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;