import React,{useState,useEffect,useRef} from 'react'
import {Link} from 'react-router-dom';
import classes from './Login.module.css';
var store = require('store');

const Register=()=> {
  
    const [msg,setMsg] = useState('');
    const emailInputRef=useRef();
    const addressInputRef= useRef();
    const passwordInputRef= useRef();
  
    
    const success ={padding:"10px 15px", border:"1px solid green", color:"green"};
    const fail ={padding:"10px 15px", border:"1px solid red", color:"red"};

 
    useEffect(()=>{
        if(msg.includes('Success')){
            setTimeout(()=>{  window.location.replace("/login");;
              setMsg('');
        },1000) ;
        }
    });


    const fetchRequest= async(user)=>{
        console.log("in fetchRequest", user)
        try{
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBFDRS3qMecD0q0D-7hohPURiooqwJOifU',{
            method: 'POST',
            headers: {
                'Content-type': '/application.json',
            },
            body: JSON.stringify({
              
                  password: user.password,
                email:user.email,      returnSecureToken:true,
              })
          });


       
           if(!response.ok){
               throw new Error('Email Already Exists! LogIn with exisiting mail id.');
           }
           setMsg("Registered Successfully");
           const data= await response.json();
           setMsg("Registered Successfully");
        }catch(error){
        alert("EMAILID ALREADY EXISTS");
        }     
        
    }

  const onRegisteredHandler= async (event)=>{
   event.preventDefault();
   const enteredEmail = emailInputRef.current.value;
   const enteredPassword = passwordInputRef.current.value;
   const enteredAddress = addressInputRef.current.value;
 
  // console.log(enteredEmail,enteredPassword,enteredAddress);
   const userData={
       email: enteredEmail,
       password: enteredPassword,
       address: enteredAddress,
   };
   store.set('address',enteredAddress);

   fetchRequest(userData);
   
  
}
    return (
        <form className={`${classes.auth} form1`} onSubmit={onRegisteredHandler}>
                    <h2>Create Account</h2><br/>
                    <div className="d-flex flex-column">
                    <div className="form-group">
             <div className={`${classes.control} form-group`}>
             <label htmlFor="email" className="form-label m-2 h5">Email</label>
            <input type="email" name="mail" placeholder="Email" className="form-control"  ref={emailInputRef}  required/>
            </div>
             <div className={`${classes.control} form-group`}>
             <label htmlFor="password" className="form-label m-2 h5">Password</label>
            <input type="password" name="psd" placeholder="Password" className="form-control" ref={passwordInputRef} required/>
            </div>
            <div className={`${classes.control} form-group`}>
            <label htmlFor="address" className="form-label m-2 h5">Address</label>
             <textarea type="text" name="addr" placeholder="Address" className={`${classes.control} form-group`} ref={addressInputRef} required/>
            </div>         
             </div>
                <button className="btn btn-primary my-3 h4">Sign Up</button>
                <div className="h5 text-center" style={msg==='' ? {} : (msg.includes("Success") ? success :fail)}>{msg}</div>
                <hr/>
                 <span>Already have an account?  |  <Link to="/login">Sign in</Link></span>              
                 </div>                
           </form>
    )
}

export default React.memo(Register)