import React, { Fragment } from 'react'
import CheckNavbar from '../components/Navigation/CheckNavBar';
import Footer from '../components/UI/Footer';
import CheckOut from '../components/UI/CheckOut';
import {Switch, Route} from 'react-router-dom';
import Home from '../components/UI/Home';
import Menu from '../components/UI/Menu';

const DashBoardLayout=(props)=>{
    const matchPath = props.match.path;  
return(
    <Fragment>
    <div className="dashboardLayout">
    <CheckNavbar/> 
    <Switch>
        <Route 
        exact path={`${matchPath}`} 
        render={(props) => (matchPath === "/" ? 
        (<Home {...props} />) : 
        (matchPath ==="/menu" ? 
        (<Menu {...props} />) : 
        (matchPath ==="/checkout" ? 
        (<CheckOut {...props} />) : 
        (null))))}/>
        </Switch>
    <Footer/>  
    </div>
    </Fragment>

)
}

export default React.memo(DashBoardLayout);