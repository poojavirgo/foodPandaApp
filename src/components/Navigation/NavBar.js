import React from 'react';
import '../../css/navbar.css';
import { Link } from 'react-router-dom';

import logo from '../../assets/img.jpeg'

const NavBar = () => {

  const onLoginClick = () => {
    window.location.replace("/login");
  }


  const onSignUpClick =()=>{
    window.location.replace("/register");
  }

  return (
    <>
      <div className="loginBar container-fluid bg-dark d-flex flex-wrap align-items-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', backgroundColor: 'black' }}>
        <nav className="navbar-dark d-inline-flex align-items-center flex-grow-1" >
          <Link to="/" className="navbar-brand">
            <img id="nav-logo" src={logo} />
            <span className="nav-title">Food</span><span className="nav-title-to">Panda</span>
          </Link>
        </nav>
        <div className="d-inline-flex m-2 logincategory" style={{ display: 'flex' }}>
          <div className="">
            <button type="button" className="btn btn-outline-light btn-lg text-white loginbtn me-2" onClick={onLoginClick}>Login</button></div>
          <div className="">
            <Link to="/register"><button type="button" className="btn btn-light btn-lg me-2" onClick={onSignUpClick}>Sign up</button></Link>
          </div>
        </div>

      </div>
      <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="about-hotel">
      </div>

    </>
  )
}

export default React.memo(NavBar)