import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom'; //version 5.2.1 (latest is the 6)
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import Home from './Components/Home'
import Info from './Components/Info'

import 'bootstrap/dist/css/bootstrap.min.css';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

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
        <Redirect to='/home' />
      </Route>
    </Switch>
    </>
  }
  
}

export default App;
