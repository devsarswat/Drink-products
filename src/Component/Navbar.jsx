import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Acontext } from "../App";

const Navbar = () => {
  const { search, setSearch } = useContext(Acontext);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ms-auto mb-2 mb-lg-0">
      <div className="container-fluid">
        <Link className="navbar-brand mx-4" to="/">
          Drink Kings
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link" to="/coffee">
                Coffee
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={handleSearchChange}
                className="form-control"
              />
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link" to="/">
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
