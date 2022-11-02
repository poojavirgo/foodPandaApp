import React,{useContext,useEffect,useCallback, useState} from 'react'
import {itemContext} from '../../store/context';

var store = require('store');

const Cart=()=> {

    const iL = useContext(itemContext);
    const {list,loggedIn}=iL.state;
    const totalCost =store.get('totalCost')?? 0;
    const totalItems =store.get('totalitems')?? 0;
    const [showcart,setShowCart]= useState(false);

    const btnPopup=()=>{
        document.getElementById('clrCart').classList.add("vs");
        setShowCart(prevState=>!prevState);
    }
    const calcAmt = useCallback(()=>{
        iL.method({type:'totalCost'});
    },[iL])

    useEffect(()=>{    
            calcAmt();
    },[calcAmt])

    const clearCart=()=>{
        iL.method({type:'clearCart'});}

        const increment=(data)=>{
            iL.method({type:'addItem',payload:data})
            iL.method({type:'getTotalItems'}) 
           iL.method({type:'totalCost'})  
        }
        const decrement= (data)=>{
            iL.method({type:'deleteItem',payload:data})
            
            if(list && list.length){
                iL.method({type:'getTotalItems'}) ;
                iL.method({type:'totalCost'})
            }           
        }
       const authorize=()=>{
      return  loggedIn ? window.location.replace('/checkout') : window.location.replace('/login');
         
       }
   return (
       <>
        {list.length && 
         <div className="bg-body p-2 text-dark border-top" style={{backgroundColor:'yellow',zIndex:"400",position:'fixed',bottom:'0px',left:'0',right:'0', display:'inline-flex',justifyContent:'flex-start'}}>
            <div className="container-cart p-2 d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center" style={{display:'flex',alignItems:'center',justifyContent:'space-around',padding:'2rem'}}>
                    <button type="button" className="btn btn-outline-danger" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" onClick={btnPopup} style={{backgroundColor:"white"}}>
                        <i className="bi bi-chevron-double-up text-dark"></i>
                        </button>
               <div className="h4" style={{fontSize:"1.5rem"}}>{`Your Orders (${totalItems})`}</div>
               <div className="h4" style={{fontSize:"1.5rem"}}>Subtotal:{' '}&#8377;{totalCost}</div>
               <div className="d-inline-flex">
               <button type="button" style={{backgroundColor:'white',border:'1px solid purple',padding:'9px',borderRadius:'1rem'}} id="clrCart" className="btn btn-outline-danger invisible me-2" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasBottom" onClick={clearCart}>Clear Cart</button>
            <button type="button" className="btn btn-danger" style={{backgroundColor:'white',border:'1px solid purple',padding:'9px', borderRadius:'1rem', marginLeft:'35px'}}  onClick={authorize}>Continue</button>       
               </div>
            </div>
            </div>
            </div>}
         {list.length &&  showcart &&
            <div className="offcanvas offcanvas-bottom" tabIndex="-1" id="offcanvasBottom" style={{backgroundColor:'#fff',position:'fixed',width:'100%', transition: 'transform .3s ease-in-out'}}>
            <div className="offcanvas-header">
              <h3 className="offcanvas-title" id="offcanvasBottomLabel">Your Orders</h3>
              <div><button type="button" id="close" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button></div>
            </div><hr/>
            <div className="offcanvas-body small">
              <table className="table"> 
                <tbody>
                {list.map(l=>(    
                    <tr key={l.itemName}>
                    <td className="h5"><span><i className={`bi bi-circle-fill ${l.vegan==="veg"? "greenColor" : l.vegan==="Non veg" ? "redColor" : "yellowColor"}`}></i></span>{l.itemName}</td>
                    <td>
                        <div className="btn-group btn-group-sm">
                    <button className="btn btn-danger" style={{color:'#fff', backgroundColor: '#dc3545',borderColor: '#dc3545'}} onClick={()=>decrement(l)}>-</button>
                    <button className="btn btn-danger" style={{color:'#fff', backgroundColor: '#dc3545',borderColor: '#dc3545'}}>{l.quantity}</button>
                    <button className="btn btn-danger" style={{color:'#fff', backgroundColor: '#dc3545',borderColor: '#dc3545'}} onClick={()=>increment(l)}>+</button>
                    </div>
                    </td>
                    <td>&#8377;{l.quantity*l.price}</td>
                </tr>
                
                
                ))}
                
                </tbody>
                </table>
               
            </div>     
          </div> }
          </>
          
        
   )

}

export default React.memo(Cart);