import React from 'react';

import { Switch, Route, withRouter } from 'react-router-dom';
import { Container} from 'react-bootstrap';

import NavbarSLO from './NavbarSLO'

class Home extends React.Component {

    render(){
        return <>
        <Switch>
            <Route exact path='/home'>
                <NavbarSLO title="Still Life Orchestra"/>
                <Container>
                    <h1>My Home Still Life</h1>
                    <h2>Buttons here</h2>
                </Container>
             </Route>
        </Switch>
        </>
    }
}

export default withRouter(Home);