import React from 'react';

import { Switch, Route, withRouter } from 'react-router-dom';
import { Container} from 'react-bootstrap';

import NavbarSLO from './NavbarSLO'
import MyChart from './MyChart';

class Home extends React.Component {

    render(){
        return <>
        <Switch>
            <Route exact path='/home'>
                <NavbarSLO title="Still Life Orchestra"/>
                <Container>
                    <h2 className='mt-4 pb-0 mb-0'>Current moods</h2>
                    <MyChart/>
                    <h2>Buttons here</h2>
                    <h2>Buttons here</h2>
                    <h2>Buttons here</h2>
                    <h2>Buttons here</h2>

                </Container>
             </Route>
        </Switch>
        </>
    }
}

export default withRouter(Home);