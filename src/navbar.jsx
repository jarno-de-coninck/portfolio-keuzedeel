import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './main.scss';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark position-fixed w-100">
      <div className="container-fluid">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end px-5" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item px-3">
              <NavLink exact className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item px-3">
              <NavLink className="nav-link" to="/aboutme">
                Over mij
              </NavLink>
            </li>
            <li className="nav-item px-3">
              <NavLink className="nav-link" to="/projects">
                Projecten
              </NavLink>
            </li>
            <li className="nav-item px-3">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
