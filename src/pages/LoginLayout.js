import React ,{Fragment} from 'react';
import { Switch,Route } from 'react-router-dom';
import Login from '../components/UI/Login';
import CardContainer from '../components/UI/CardContainer';
import  Register from '../components/UI/Register';

const LoginLayout =(props)=>{

    const matchPath=props.match.path;

    return(
    <Fragment>
        <CardContainer/>
       <Switch>
        <Route path={`${matchPath}`} render={(props) => matchPath ==="/login" ? 
        (<Login {...props} />) : 
        <Register {...props} /> }/>
        </Switch>
    </Fragment>
        
    
    )
}

export default LoginLayout;