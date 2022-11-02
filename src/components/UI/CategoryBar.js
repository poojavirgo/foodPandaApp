import React from 'react';

const CategoryBar=()=> {

    return (
      <>
       <div className="loginBar container-fluid bg-dark d-flex flex-wrap align-items-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', backgroundColor: 'yellow' }}>
      <ul className="navbar-nav" style={{display:'flex',listStyleType: 'none'}}>
      <li className="nav-item">
          <a className="nav-link" href="#Break Your Fast">Break Your Fast</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Time for Lunch">Time for Lunch</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Can I Have Snacks">Can I Have Snacks</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Dinner">Dinner</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Burgers and Beverages">Burgers and Beverages</a>
        </li>
          </ul>
       </div>
    
      </>
    
    )
}

export default React.memo(CategoryBar)