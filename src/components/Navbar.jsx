
import React from "react";
import {  useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const NavBar=()=>{
const selector = useSelector((state)=>state.handleCart)

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand fw-bold fs-4" href="#">All Cllections</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <form className="d-flex">
        <input className="form-control ms-4 me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary bg-primary text-light" type="submit">Search</button>
      </form>

    <div className="collapse navbar-collapse  "   id="navbarSupportedContent">
      <ul className="navbar-nav text-md fw-normal mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Product</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul> */}
        </li>
       
      </ul>
      <div className="buttons text-end me-2">
            <button className="btn btn-outline-dark bg-dark text-light rounded-pill">Log In</button>
        </div>
        <div className="buttons text-end me-2">
            <button className="btn btn-outline-dark bg-dark text-light rounded-pill">Sin UP</button>
        </div>
     
        <div className="buttons text-end">
        <NavLink to="/cart" className="btn btn-outline-primary ms-2">
                <span className="fa fa-shopping-cart me-1"></span> Cart ({selector.length})
            </NavLink>
        </div>
     
     
    </div>
  </div>
</nav>

        </div>
    )
}

export default NavBar;