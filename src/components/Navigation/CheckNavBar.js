import React, {useContext} from 'react'
import {itemContext} from '../../store/context';
import LoggedNavBar from './LoggedNavBar';
import NavBar from './NavBar'
var store = require('store');

const CheckNavbar=()=> {

const itemCtx = useContext(itemContext);
const loggedin = store.get('loggedIn');
const {loggedIn}=itemCtx.state ?? (loggedin ?? false);

return  (loggedIn ?
    (<LoggedNavBar/>) :
         (<NavBar/>)
)
    
}

export default React.memo(CheckNavbar);