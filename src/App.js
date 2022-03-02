import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom'; //version 5.2.1 (latest is the 6)
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import Home from './Components/Home'
import Info from './Components/Info'

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
    crossorigin="anonymous">
</link>

function App() {
  return (
    <div className="App">
      <Router>
        <StillLifeOrcherstra></StillLifeOrcherstra>
      </Router>
    </div>
  );
}

class StillLifeOrcherstra extends React.Component {

  render(){
    return <>
    <Switch>
      <Route path='/home'>
        <Home/>
      </Route>
      <Route path='/info'>
        <Info/>
      </Route>
      <Route path='/'>
        <Home/>
      </Route>
    </Switch>
    </>
  }
  
}

export default App;
