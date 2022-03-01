import React from 'react';

import { Switch, Route, withRouter } from 'react-router-dom';

import { Container} from 'react-bootstrap';


class Home extends React.Component {

    render(){
        return <>
        <Container>
            <h1>My Home Still Life</h1>
            <h2>Buttons here</h2>
        </Container>
        </>
    }
}

export default withRouter(Home);