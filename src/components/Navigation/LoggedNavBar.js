import React ,{useContext} from 'react'
import {itemContext} from '../../store/context';
import {Link} from 'react-router-dom';
import '../../css/navbar.css';

var store = require('store');

const LoggedNavBar=() =>{
  const itemCtx = useContext(itemContext);
  const totalItems=store.get('totalitems');


 const getLogOut= () =>{
  if(window.confirm("Are you sure that you want to log off?")){ 
     window.location.replace('/');
     itemCtx.method({type:'logOut'});
  }
}
    return (
       <div className="loggedBar container-fluid bg-dark d-flex justify-content-between flex-wrap position-fixed" style={{display:'flex',alignItems:'center',justifyContent:'space-around',backgroundColor:'black'}}>
            <nav className="navbar-dark d-inline-flex align-items-center">
  
    <Link className="navbar-brand" to="/">
      <span className="nav-title">Food</span><span className="nav-title-to">Panda</span>
    </Link>
    
    </nav>

      <div className="d-flex justify-content-between align-items-center" style={{display:'flex',alignItems:'center'}}>  
          <div className="px-3 pt-2 me-15 ms-auto" onClick={()=>{window.location.replace('/menu')}}><i className="bi bi-cart-plus-fill fancyIcon position-relative" role="button">
            <span className="position-absolute translate-middle badge rounded-circle bg-danger" style={{fontSize:".45em",transform:"translate(-50%,-50%)",padding:'0.1em 0.25em',top:'10px',borderRadius:"50%",backgroundColor: totalItems!==0 ?'black':'red'}} >
          {totalItems!==0 ? totalItems: null}</span></i></div>
          <div className="px-5 pt-2 me-15 dropdown">
            <i className="bi bi-person-circle fancyIcon dropdown-toggle" style={{marginLeft:'40px',fontSize:'1.5rem'}}role="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" onClick={getLogOut}>LogOut</i>
            </div>
      </div> 
        
    
        </div>
        
    )
}

export default React.memo(LoggedNavBar)