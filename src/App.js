import React, { useReducer } from 'react';
import { itemContext } from './store/context';
import { initialState, myReducer } from './store/reducer';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import DashBoardLayout from '../src/pages/DashBoardLayout';
import LoginLayout from './pages/LoginLayout';

const App = () => {
  const [myState, dispatch] = useReducer(myReducer, initialState);

  return (
    <div className="App">
      <itemContext.Provider value={{ state: myState, method: dispatch }}>
        <Switch>
        
          <Route exact path='/' render={props => <DashBoardLayout {...props} />} />
          <Route exact path='/login' render={props => <LoginLayout {...props} />} />
          <Route path='/register' render={props => <LoginLayout {...props} />} />
          <Route path='/editProfile' render={props => <DashBoardLayout {...props} />} />
          <Route path='/checkout' render={props => <DashBoardLayout {...props} />} />
          <Route path='/menu' render={props => <DashBoardLayout data={myState} {...props}/>}/>
        </Switch>
      </itemContext.Provider>
    </div>
  );
}

export default App;
