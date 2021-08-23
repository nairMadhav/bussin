import React from 'react';
import './StyleSheet/App.css';
import MainPage from './components/MainPage';
import Signup from './components/UserAuth/Signup';
import Login from './components/UserAuth/Login';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
const App=()=> {
  return(
    <Router className="App">
      <Switch>
      <Route path="/login">
          <Login/>
        </Route>
        <Route path="/signup">
          <Signup/>
        </Route>
        <Route path="/">
          <MainPage/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
