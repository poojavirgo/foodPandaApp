import React,{useEffect,useContext} from 'react'
import Cart from './Cart'
import CategoryBar from './CategoryBar'
import RestaurantMenu from './ RestaurantMenu';
import { itemContext } from '../../store/context';


var store =require('store');

const Menu=(props)=> {
    console.log("Menu",props);
    const iL = useContext(itemContext);
    const orderedItems =store.get('orderedItems');
    let {list}=iL.state ?? orderedItems ;
   
   
    useEffect(()=>{ 
        let prev= window.scrollY;  
        const scrolling = ()=>{
            let current = window.scrollY;
            const catBar = document.getElementById("categoryBar");
            //const loggedbar = document.getElementsByClassName("loggedBar");
            console.log(prev, current,"p","c")
            if (prev > current && current <10) {
                if(catBar){
                    catBar.style.top = "85px";
                }
              } 
            else{
                if(catBar){
                   document.getElementById('categoryBar').style.top = "0" ;
                }
            }
              prev = current;
        }   
         document.addEventListener('scroll', scrolling)
         return ()=> document.removeEventListener('scroll', scrolling);
         
        },[])
    return (
        <div>
            <CategoryBar/>
            <RestaurantMenu/>
            {list && (list.length>0 ? <Cart/> : <></>)}
        </div>
    )
}

export default React.memo(Menu)