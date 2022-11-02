import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
   const onclickMenu=()=>{
       window.location.replace('/menu');
   }
   const onClickHome=()=>{
    window.location.replace('/');
   }
    return (
        <Fragment>
            <div className="container-fluid footerNav bg-dark" style={{backgroundColor:'black', width:'80rem', display:'flex'}}>
                <footer className="d-flex flex-wrap align-items-center py-2" style={{display:"flex"}}>
                    <p className="col-md-4 mb-0 text-light flex-fill" style={{color:'white'}}>&copy; 2022 Company, Inc</p>

                    <div className="nav col-md-5 d-inline-flex flex-fill align-items-center justify-content-end link-light text-decoration-none"
                    style={{display: "flex",
                        alignItems: "center",  
                        marginLeft:"40rem" }}>
                        <div className="nav-link px-2 text-light" data-bs-toggle="tooltip" data-bs-placement="top" role="button"
                            title="Call us: 080 4123 7514">
                            Contact Us
                        </div>
                        <Link to="/menu" className="nav-link px-2 text-light" onClick={onclickMenu}>Menu</Link>
                        <Link to="/" className="nav-link px-2 text-light" onClick={onClickHome}>Home</Link>
                    </div>
         
                </footer>
                </div>
         
       
        </Fragment>
    )
}

export default React.memo(Footer);