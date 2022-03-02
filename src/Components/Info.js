import React from 'react';
import { Container } from 'react-bootstrap';

import { Switch, Route, withRouter } from 'react-router-dom';

import NavbarSLO from './NavbarSLO';


class Info extends React.Component {
    render(){
    return<>
    <Switch>
        <Route>
        <NavbarSLO title="Info" toBack={true} goback={null}/>
        <Container>
            <h2>We are Still Life Orchestra</h2>
            <h3 className="mt-5 p-0 mx-auto">Using this app you can interract with the installation changing the mood...</h3>
        </Container>
        </Route>
    </Switch>
    </>
    }
}

export default withRouter(Info)